(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{380:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"自动生成字幕"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动生成字幕"}},[t._v("#")]),t._v(" 自动生成字幕")]),t._v(" "),s("h3",{attrs:{id:"本文目的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本文目的"}},[t._v("#")]),t._v(" 本文目的：")]),t._v(" "),s("p",[t._v("识别视频中的音频生成字幕并合成新的带字幕的视频，win11+anaconda+python3.9环境")]),t._v(" "),s("h3",{attrs:{id:"步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤：")]),t._v(" "),s("ol",[s("li",[t._v("分离音频：ffmpeg")]),t._v(" "),s("li",[t._v("语音识别：whisper")]),t._v(" "),s("li",[t._v("合成字幕：moviepy")])]),t._v(" "),s("h3",{attrs:{id:"资源连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源连接"}},[t._v("#")]),t._v(" 资源连接：")]),t._v(" "),s("ol",[s("li",[t._v("ffmpeg："),s("a",{attrs:{href:"https://links.jianshu.com/go?to=https%3A%2F%2Fffmpeg.org%2Fdownload.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ffmpeg.org/download.html"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("whisper："),s("a",{attrs:{href:"https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fopenai%2Fwhisper.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/openai/whisper.git"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("ImageMagick："),s("a",{attrs:{href:"https://links.jianshu.com/go?to=http%3A%2F%2Fwww.imagemagick.org%2Fscript%2Fdownload.php%23windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.imagemagick.org/script/download.php#windows"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"操作步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[t._v("#")]),t._v(" 操作步骤")]),t._v(" "),s("h3",{attrs:{id:"一、安装环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、安装环境"}},[t._v("#")]),t._v(" 一、安装环境")]),t._v(" "),s("p",[s("strong",[t._v("提示")]),t._v("：如果没装git需要先本地安装git并添加环境变量")]),t._v(" "),s("h4",{attrs:{id:"创建conda环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建conda环境"}},[t._v("#")]),t._v(" 创建conda环境")]),t._v(" "),s("p",[t._v("​"),s("code",[t._v("conda create -n yu39 python=3.9")])]),t._v(" "),s("p",[s("code",[t._v("conda install pytorch torchvision torchaudio cpuonly -c pytorch")])]),t._v(" "),s("p",[s("code",[t._v("conda install -c conda-forge moviepy")])]),t._v(" "),s("p",[s("code",[t._v("pip install git+https://github.com/openai/whisper.git")]),t._v("​"),s("br"),t._v("\n(重装)"),s("code",[t._v("pip install --upgrade --no-deps --force-reinstall git+https://github.com/openai/whisper.git")]),t._v("​"),s("br"),t._v("\n(如需翻译)"),s("code",[t._v("conda install -c auto translate")]),t._v("​")]),t._v(" "),s("h4",{attrs:{id:"安装ffmpeg-imagemagick"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装ffmpeg-imagemagick"}},[t._v("#")]),t._v(" 安装ffmpeg,ImageMagick")]),t._v(" "),s("p",[t._v("moviepy会使用到ffmpeg,ImageMagick，下载解压安装"),s("br"),t._v("\n两种方式指定二选一：添加环境变、修改配置文件，均精确到exe文件")]),t._v(" "),s("p",[t._v("moviepy配置文件"),s("strong",[t._v("anaconda3\\envs\\yu38\\Lib\\site-packages\\moviepy\\config_defaults.py:")]),s("br"),t._v("\n​"),s("code",[t._v("FFMPEG_BINARY = os.getenv('FFMPEG_BINARY', 'ffmpeg-imageio')")])]),t._v(" "),s("p",[s("code",[t._v("IMAGEMAGICK_BINARY = os.getenv('IMAGEMAGICK_BINARY', 'auto-detect')")]),t._v("​")]),t._v(" "),s("p",[t._v("修改后："),s("br"),t._v("\n​"),s("code",[t._v("FFMPEG_BINARY=D:\\ProgramFiles\\ffmpeg-5.1.2-essentials_build\\bin\\ffmpeg.exe")])]),t._v(" "),s("p",[s("code",[t._v("IMAGEMAGICK_BINARY=D:\\Program Files\\ImageMagick-7.1.0-Q16-HDRI\\magick.exe")]),t._v("​")]),t._v(" "),s("p",[t._v("若添加环境变量，其变量名为"),s("strong",[t._v("FFMPEG_BINARY")]),t._v("，"),s("strong",[t._v("IMAGEMAGICK_BINARY")])]),t._v(" "),s("h3",{attrs:{id:"二、实际操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、实际操作"}},[t._v("#")]),t._v(" 二、实际操作")]),t._v(" "),s("h4",{attrs:{id:"一、分离音频"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、分离音频"}},[t._v("#")]),t._v(" 一、分离音频")]),t._v(" "),s("h5",{attrs:{id:"命令方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令方式"}},[t._v("#")]),t._v(" 命令方式：")]),t._v(" "),s("p",[t._v("​"),s("code",[t._v("ffmpeg.exe -i E:\\est\\bb.mp4 E:\\est\\bb.mp3ffmpeg.exe -i E:\\est\\bb.mp4 -vcodec copy -an E:\\est\\bb.avi")]),t._v("​")]),t._v(" "),s("h5",{attrs:{id:"python代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python代码"}},[t._v("#")]),t._v(" python代码")]),t._v(" "),s("div",{staticClass:"language-from extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# 将mp4文件转为mp3音频文件并返回其文件路径,生成路径仍在原路径中(需要先下载moviepy库)\ndef mp4_to_mp3(path):\n    try:\n       video = VideoFileClip(path)\n       audio = video.audio\n       # 设置生成的mp3文件路径\n       newPath = path.replace('mp4', 'mp3')\n       audio.write_audiofile(newPath)\n       return newPath\n    except Exception as e:\n        print(e)\n        return None\nmp4_to_mp3(r'E:\\est\\bb.mp4') \n")])])]),s("h4",{attrs:{id:"二、语音识别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、语音识别"}},[t._v("#")]),t._v(" 二、语音识别")]),t._v(" "),s("h5",{attrs:{id:"命令方式-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令方式-2"}},[t._v("#")]),t._v(" 命令方式：")]),t._v(" "),s("p",[t._v("whisper.exe所在位置：anaconda3\\envs\\yu38\\Scripts\\whisper.exe"),s("br"),t._v("\n​"),s("code",[t._v("whisper E:\\est\\bb.mp3 --model small --language Chinese")]),t._v("​​"),s("br"),t._v("\n--model：tiny、base、small、medium、large，准确率耗时依次递增，首次执行会自动下载"),s("br"),t._v(" "),s("strong",[t._v("效果")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00.000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("01.000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 我说一个事实\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("01.000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("03.000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 就是一个人的思想境界越高\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("03.000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("06.000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 那种以人际关系为目标的欲望就会越低\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("06.000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 我发现如果一个人特别热衷于社交、感情、关系这些\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 而且搞得头头是道道的人\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14.000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 往往缺乏深刻的认知和知识\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14.000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 因为他不需要太深刻的见识\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18.000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 他只需要随着大溜跟着群体走\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18.000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20.000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 就可以保证一时唯有生活安危\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20.000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("23.000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 而事实上那些特别深刻的道理和见解\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("23.000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25.000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 一般都是需要经历很大的痛苦\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25.000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("28.000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 并且对其充分的思考之后才能得到的\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("28.000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("29.000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 两个条件少一个都不行\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("29.000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("33.000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 而这些痛苦和思考基本上都有不合群这一特征\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("33.000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("35.000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 不是那种不善良的不合群\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("35.000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("37.000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 而是属于人际关系技巧的那一种\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("37.000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("38.000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 就比如说他故意不合群\n")])])]),s("h5",{attrs:{id:"python代码-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python代码-2"}},[t._v("#")]),t._v(" python代码:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" whisper\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 语音识别")]),t._v("\nmodel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" whisper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"small"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nresult "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transcribe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("r'bb.mp3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" language"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chinese'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 翻译")]),t._v("\ntranslator "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Translator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("from_lang"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Chinese"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("to_lang"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Japanese"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提取字幕[起始时间，持续时间，字幕]")]),t._v("\nsegments "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'segments'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nl_subtitle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" seg "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" segments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    start "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" seg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'start'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    end "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" seg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'end'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    text "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" seg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# subtitle = [round(start,2), round(end-start, 2), translator.translate(text)]")]),t._v("\n    subtitle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("round")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("round")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("end"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subtitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    l_subtitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subtitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n")])])]),s("h4",{attrs:{id:"三、合成字幕"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、合成字幕"}},[t._v("#")]),t._v(" 三、合成字幕")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" moviepy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("editor "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("videocaption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src_mp4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dst_mp4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" subtitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    video "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" VideoFileClip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src_mp4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    position "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bottom'")]),t._v("\n    txts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" subtitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        txt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TextClip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fontsize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("font"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SimHei'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1900")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        align"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'center'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        txts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("txt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合成字幕")]),t._v("\n    video "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CompositeVideoClip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("video"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("txts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合成音频")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# videos = video.set_audio(AudioFileClip('Python.mp3'))")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保存视频，注意加上参数audio_codec，否则音频无声音")]),t._v("\n    video"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write_videofile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dst_mp4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" audio_codec"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mp3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    src_mp4 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("r'bb_有声无字幕.mp4'")]),t._v("\n    dst_mp4 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("r'bb_有声有字幕.mp4'")]),t._v("\n    videocaption"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src_mp4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dst_mp4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("l_subtitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"三、结语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、结语"}},[t._v("#")]),t._v(" 三、结语")]),t._v(" "),s("p",[t._v("本目标核心点在用whisper语音转文字")]),t._v(" "),s("h3",{attrs:{id:"四、其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、其他"}},[t._v("#")]),t._v(" 四、其他")]),t._v(" "),s("p",[t._v("由于CUDA装起来真的是过于麻烦，所以还有一个项目是基于Direct3D来进行，对Whisper进行了一个封装。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/Const-me/Whisper",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Const-me/Whisper"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("比 OpenAI 的实现快得多，只要是支持Direct3D的GPU都能够轻松的运行。")])])}),[],!1,null,null,null);s.default=e.exports}}]);