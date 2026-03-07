---
title: FFMPEG  S切片并加密
short_title: 
date: 2024-07-10 08:12:52
article: true
timeline: false
isOriginal: true
permalink: /pages/894c68/
categories: 
  - post
tags: 
  - 
---


<!-- more -->


# FFMPEG TS切片并加密

## 使用OpenSSL生成秘钥

```actionscript
openssl rand 16 > encrypt.key
```

## 生成IV

```actionscript
openssl rand -hex 16
```

## 编写key.info文件

```shell
http://localhost:8000/encrypt.key
./encrypt.key
e315a145a637e4e9e68ee492716462a7
```

# 切片并加密

```shell
ffmpeg -y -i ./SSIS-878.mp4 \
-c:a copy \
-f hls -hls_time 720 -hls_list_size 0 -hls_key_info_file ./key.keyinfo -hls_playlist_type vod -hls_segment_filename ./r%d.zip ./playlist.m3u8
```

## 开启硬件加速

查看所支持的硬件加速方法

```shell
ffmpeg -hwaccels
```

```shell
ffmpeg version 7.0.1 Copyright (c) 2000-2024 the FFmpeg developers
  built with Apple clang version 15.0.0 (clang-1500.3.9.4)
  configuration: --prefix=/opt/homebrew/Cellar/ffmpeg/7.0.1 --enable-shared --enable-pthreads --enable-version3 --cc=clang --host-cflags= --host-ldflags='-Wl,-ld_classic' --enable-ffplay --enable-gnutls --enable-gpl --enable-libaom --enable-libaribb24 --enable-libbluray --enable-libdav1d --enable-libharfbuzz --enable-libjxl --enable-libmp3lame --enable-libopus --enable-librav1e --enable-librist --enable-librubberband --enable-libsnappy --enable-libsrt --enable-libssh --enable-libsvtav1 --enable-libtesseract --enable-libtheora --enable-libvidstab --enable-libvmaf --enable-libvorbis --enable-libvpx --enable-libwebp --enable-libx264 --enable-libx265 --enable-libxml2 --enable-libxvid --enable-lzma --enable-libfontconfig --enable-libfreetype --enable-frei0r --enable-libass --enable-libopencore-amrnb --enable-libopencore-amrwb --enable-libopenjpeg --enable-libspeex --enable-libsoxr --enable-libzmq --enable-libzimg --disable-libjack --disable-indev=jack --enable-videotoolbox --enable-audiotoolbox --enable-neon
  libavutil      59.  8.100 / 59.  8.100
  libavcodec     61.  3.100 / 61.  3.100
  libavformat    61.  1.100 / 61.  1.100
  libavdevice    61.  1.100 / 61.  1.100
  libavfilter    10.  1.100 / 10.  1.100
  libswscale      8.  1.100 /  8.  1.100
  libswresample   5.  1.100 /  5.  1.100
  libpostproc    58.  1.100 / 58.  1.100
Hardware acceleration methods:
videotoolbox
```

只需要在命令上面增加 `-hwaccel videotoolbox` 变成下面这样，不过这样大概率还不行，因为不一定支持视频的编解码器

```shell
ffmpeg -y -hwaccel videotoolbox -i ./SSIS-878.mp4 \
-c:a copy \
-f hls -hls_time 720 -hls_list_size 0 -hls_key_info_file ./key.keyinfo -hls_playlist_type vod -hls_segment_filename ./r%d.zip ./playlist.m3u8
```

所以继续：

> `ffmpeg -codecs | grep "h264"` windows 下换成这个`ffmpeg -codecs | findstr "h264"`

```shell
ffmpeg version 7.0.1 Copyright (c) 2000-2024 the FFmpeg developers
  built with Apple clang version 15.0.0 (clang-1500.3.9.4)
  configuration: --prefix=/opt/homebrew/Cellar/ffmpeg/7.0.1 --enable-shared --enable-pthreads --enable-version3 --cc=clang --host-cflags= --host-ldflags='-Wl,-ld_classic' --enable-ffplay --enable-gnutls --enable-gpl --enable-libaom --enable-libaribb24 --enable-libbluray --enable-libdav1d --enable-libharfbuzz --enable-libjxl --enable-libmp3lame --enable-libopus --enable-librav1e --enable-librist --enable-librubberband --enable-libsnappy --enable-libsrt --enable-libssh --enable-libsvtav1 --enable-libtesseract --enable-libtheora --enable-libvidstab --enable-libvmaf --enable-libvorbis --enable-libvpx --enable-libwebp --enable-libx264 --enable-libx265 --enable-libxml2 --enable-libxvid --enable-lzma --enable-libfontconfig --enable-libfreetype --enable-frei0r --enable-libass --enable-libopencore-amrnb --enable-libopencore-amrwb --enable-libopenjpeg --enable-libspeex --enable-libsoxr --enable-libzmq --enable-libzimg --disable-libjack --disable-indev=jack --enable-videotoolbox --enable-audiotoolbox --enable-neon
  libavutil      59.  8.100 / 59.  8.100
  libavcodec     61.  3.100 / 61.  3.100
  libavformat    61.  1.100 / 61.  1.100
  libavdevice    61.  1.100 / 61.  1.100
  libavfilter    10.  1.100 / 10.  1.100
  libswscale      8.  1.100 /  8.  1.100
  libswresample   5.  1.100 /  5.  1.100
  libpostproc    58.  1.100 / 58.  1.100
 DEV.LS h264                 H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10 (encoders: libx264 libx264rgb h264_videotoolbox)
```

然后转换时手动指定

```shell
ffmpeg -y -hwaccel videotoolbox -i ./SSIS-878.mp4 \
-c:a copy -c:v h264_videotoolbox \
-f hls -hls_time 720 -hls_list_size 0 -hls_key_info_file ./key.keyinfo -hls_playlist_type vod -hls_segment_filename ./r%d.zip ./playlist.m3u8

```

不过不经过重新编码直接转换这样速度更快

```shell
ffmpeg -y -hwaccel videotoolbox -i ./SSIS-878.mp4 \
-vcodec copy -acodec copy \
-f hls -hls_time 720 -hls_list_size 0 -hls_key_info_file ./key.keyinfo -hls_playlist_type vod -hls_segment_filename ./r%d.zip ./playlist.m3u8
```


