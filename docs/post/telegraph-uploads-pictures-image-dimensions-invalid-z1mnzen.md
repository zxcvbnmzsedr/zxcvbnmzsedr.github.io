---
title:  elegraph上传图片Image dimensions invalid
short_title: ''
date: 2024-03-19 09:24:50
article: true
timeline: false
isOriginal: true
---


<!-- more -->


# Telegraph上传图片Image dimensions invalid

有的时候，使用API像`https://telegra.ph/upload`​上传文件的时候会抛出`Image dimensions invalid`​异常。

原因是Telegraph的图片限制：

* 图片尺寸小于10MB
* 宽高小于400的可能会产生异常
* 最大width 小于 5000，最大高度height 小于 4000

因为是使用python代码进行上传，所以写了一段代码将尺寸修改到合适大小，并且对图片进行压缩；

```pgsql
def compress_img(image_content, max_size=800 * 1024):
    save_quality = 60
    query_sum = 0
    image_content = BytesIO(image_content)
    image = Image.open(image_content)
    image_format = image.format
    max_width = 5000
    max_height = 4000
    if image.width > max_width or image.height > max_height:
        image = image.resize((max_width, max_height))
    # 转成rgb才能保存为jpeg格式，PIL无法压缩png图片
    image = image.convert('RGB')
    while True:
        img_byte_arr = BytesIO()
        query_sum += 1
        image.save(img_byte_arr, format=image_format, quality=save_quality)
        pic_size_bytes = img_byte_arr.tell()
        if pic_size_bytes <= max_size:
            break
        save_quality -= query_sum
        if save_quality > 0:
            continue
        else:
            break
    img_byte_arr = img_byte_arr.getvalue()
    return img_byte_arr


async def telegraph_file_upload(file_url):
    '''
    use file url upload to telegra.ph storage and returns its url
    Works ONLY with 'gif', 'jpeg', 'jpg', 'png', 'mp4'

    Parameters
    ---------------
    path_to_file -> str, file_url

    Return
    ---------------
    telegraph_url -> str, url of the file uploaded
    >>>telegraph_file_upload('https://pics4.baidu.com/feed/38dbb6fd5266d016a27113a55c317b0a34fa35ff.jpeg@f_auto?token=5ff5fe2c2e833b70692db8bae3a1f0ce')
    https://telegra.ph/file/16016bafcf4eca0ce3e2b.jpg
    >>>telegraph_file_upload('https://error.com')
    error, txt-file can not be processed
    '''
    try:
        response = await web.get(file_url)
    except Exception as e:
        logger.error(f'Error getting file: {file_url} {e}', exc_info=e)
        return file_url
    if response.status == 200:
        image_data = response.content
        url = 'https://telegra.ph/upload'
        if response.headers.get('Content-Type') == 'image/webp':
            from PIL import Image
            image_data_png = Image.open(BytesIO(image_data)).convert('RGBA')
            image_data_out = BytesIO()
            image_data_png.save(image_data_out, format='png')
            image_data = image_data_out.getvalue()
            # 打印image_data的大小
        image_data = compress_img(image_data)
        upload_response = await web.post(url, data={'file': image_data})
        import json
        telegraph_url = json.loads(upload_response.content)
        if 'error' in telegraph_url:
            logger.error(f'Error uploading file: {file_url} {telegraph_url["error"]}')
            return file_url
        telegraph_url = telegraph_url[0]['src']
        telegraph_url = f'https://telegra.ph{telegraph_url}'
        return telegraph_url
    return file_url

```
