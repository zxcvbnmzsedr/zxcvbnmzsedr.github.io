---
title: 自动生成字幕
date: 2023-05-26 13:26
permalink: /posts/%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90%E5%AD%97%E5%B9%95
categories:
- posts
tags: 
---
# 自动生成字幕

### 本文目的：

识别视频中的音频生成字幕并合成新的带字幕的视频，win11+anaconda+python3.9环境

### 步骤：

1. 分离音频：ffmpeg
2. 语音识别：whisper
3. 合成字幕：moviepy

### 资源连接：

1. ffmpeg：[https://ffmpeg.org/download.html](https://links.jianshu.com/go?to=https%3A%2F%2Fffmpeg.org%2Fdownload.html)
2. whisper：[https://github.com/openai/whisper.git](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fopenai%2Fwhisper.git)
3. ImageMagick：[http://www.imagemagick.org/script/download.php#windows](https://links.jianshu.com/go?to=http%3A%2F%2Fwww.imagemagick.org%2Fscript%2Fdownload.php%23windows)

## 操作步骤

### 一、安装环境

**提示**：如果没装git需要先本地安装git并添加环境变量

#### 创建conda环境

​`conda create -n yu39 python=3.9`

`conda install pytorch torchvision torchaudio cpuonly -c pytorch`

`conda install -c conda-forge moviepy`

`pip install git+https://github.com/openai/whisper.git`​  
 (重装)`pip install --upgrade --no-deps --force-reinstall git+https://github.com/openai/whisper.git`​  
 (如需翻译)`conda install -c auto translate`​

#### 安装ffmpeg,ImageMagick

moviepy会使用到ffmpeg,ImageMagick，下载解压安装  
 两种方式指定二选一：添加环境变、修改配置文件，均精确到exe文件

moviepy配置文件**anaconda3\envs\yu38\Lib\site-packages\moviepy\config_defaults.py:**  
​`FFMPEG_BINARY = os.getenv('FFMPEG_BINARY', 'ffmpeg-imageio')`

`IMAGEMAGICK_BINARY = os.getenv('IMAGEMAGICK_BINARY', 'auto-detect')`​

修改后：  
​`FFMPEG_BINARY=D:\ProgramFiles\ffmpeg-5.1.2-essentials_build\bin\ffmpeg.exe`

`IMAGEMAGICK_BINARY=D:\Program Files\ImageMagick-7.1.0-Q16-HDRI\magick.exe`​

若添加环境变量，其变量名为**FFMPEG_BINARY**，**IMAGEMAGICK_BINARY**

### 二、实际操作

#### 一、分离音频

##### 命令方式：

​`ffmpeg.exe -i E:\est\bb.mp4 E:\est\bb.mp3ffmpeg.exe -i E:\est\bb.mp4 -vcodec copy -an E:\est\bb.avi`​

##### python代码

```from
# 将mp4文件转为mp3音频文件并返回其文件路径,生成路径仍在原路径中(需要先下载moviepy库)
def mp4_to_mp3(path):
    try:
       video = VideoFileClip(path)
       audio = video.audio
       # 设置生成的mp3文件路径
       newPath = path.replace('mp4', 'mp3')
       audio.write_audiofile(newPath)
       return newPath
    except Exception as e:
        print(e)
        return None
mp4_to_mp3(r'E:\est\bb.mp4') 
```

#### 二、语音识别

##### 命令方式：

whisper.exe所在位置：anaconda3\envs\yu38\Scripts\whisper.exe  
​`whisper E:\est\bb.mp3 --model small --language Chinese`​​  
 --model：tiny、base、small、medium、large，准确率耗时依次递增，首次执行会自动下载  
**效果**：

```csharp
[00:00.000 --> 00:01.000] 我说一个事实
[00:01.000 --> 00:03.000] 就是一个人的思想境界越高
[00:03.000 --> 00:06.000] 那种以人际关系为目标的欲望就会越低
[00:06.000 --> 00:10.000] 我发现如果一个人特别热衷于社交、感情、关系这些
[00:10.000 --> 00:12.000] 而且搞得头头是道道的人
[00:12.000 --> 00:14.000] 往往缺乏深刻的认知和知识
[00:14.000 --> 00:16.000] 因为他不需要太深刻的见识
[00:16.000 --> 00:18.000] 他只需要随着大溜跟着群体走
[00:18.000 --> 00:20.000] 就可以保证一时唯有生活安危
[00:20.000 --> 00:23.000] 而事实上那些特别深刻的道理和见解
[00:23.000 --> 00:25.000] 一般都是需要经历很大的痛苦
[00:25.000 --> 00:28.000] 并且对其充分的思考之后才能得到的
[00:28.000 --> 00:29.000] 两个条件少一个都不行
[00:29.000 --> 00:33.000] 而这些痛苦和思考基本上都有不合群这一特征
[00:33.000 --> 00:35.000] 不是那种不善良的不合群
[00:35.000 --> 00:37.000] 而是属于人际关系技巧的那一种
[00:37.000 --> 00:38.000] 就比如说他故意不合群
```

##### python代码:

```python
import whisper

# 语音识别
model = whisper.load_model("small")
result = model.transcribe(r'bb.mp3', language='chinese')
print(result["text"])

# 翻译
translator = Translator(from_lang="Chinese",to_lang="Japanese")

# 提取字幕[起始时间，持续时间，字幕]
segments = result['segments']
l_subtitle = []
for seg in segments:
    start = seg['start']
    end = seg['end']
    text = seg['text']
    # subtitle = [round(start,2), round(end-start, 2), translator.translate(text)]
    subtitle = [round(start,2), round(end-start, 2), text]
    print(subtitle)
    l_subtitle.append(subtitle)
  
```

#### 三、合成字幕

```python
from moviepy.editor import *

def videocaption(src_mp4, dst_mp4, subtitle):
    video = VideoFileClip(src_mp4)
    position = 'bottom'
    txts = []
    for start, duration, text in subtitle:
        txt = (TextClip(text, fontsize=40,font='SimHei', size=(1900, 40),
                        align='center', color='red')
                        .set_position(position)
                        .set_duration(duration).set_start(start))
        txts.append(txt)

    # 合成字幕
    video = CompositeVideoClip([video, *txts])
    # 合成音频
    # videos = video.set_audio(AudioFileClip('Python.mp3'))
    # 保存视频，注意加上参数audio_codec，否则音频无声音
    video.write_videofile(dst_mp4, audio_codec='mp3')

if __name__ == '__main__':
    src_mp4 = r'bb_有声无字幕.mp4'
    dst_mp4 = r'bb_有声有字幕.mp4'
    videocaption(src_mp4,dst_mp4,l_subtitle)
```

### 三、结语

本目标核心点在用whisper语音转文字

### 四、其他

由于CUDA装起来真的是过于麻烦，所以还有一个项目是基于Direct3D来进行，对Whisper进行了一个封装。

[https://github.com/Const-me/Whisper](https://github.com/Const-me/Whisper)

比 OpenAI 的实现快得多，只要是支持Direct3D的GPU都能够轻松的运行。
