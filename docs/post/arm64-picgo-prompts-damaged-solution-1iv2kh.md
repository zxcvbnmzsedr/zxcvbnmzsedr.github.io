---
title: arm64 版 picgo 提示已损坏解决办法
short_title: ''
date: 2024-02-19 07:13:53
article: true
timeline: false
isOriginal: true
---


<!-- more -->


# arm64 版 picgo 提示已损坏解决办法

[PicGo](https://github.com/Molunerfinn/PicGo) 是一款很好用的图床辅助软件，一直在使用。

最新下载最新版的 picGo arm64 版安装，提示已损坏，执行以下命令解决：

```bash
sudo xattr -d com.apple.quarantine "/Applications/PicGo.app"
```

参考

* [https://github.com/1zilc/fishing-funds/issues/149#issuecomment-928044197](https://github.com/1zilc/fishing-funds/issues/149#issuecomment-928044197)
* [https://github.com/Molunerfinn/PicGo/issues/1055](https://github.com/Molunerfinn/PicGo/issues/1055)
