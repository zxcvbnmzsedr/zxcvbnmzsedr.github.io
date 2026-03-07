---
title: POI修改CellStyle不起效
short_title: 
date: 2024-05-30 01:50:02
article: true
timeline: false
isOriginal: true
permalink: /pages/67b904/
categories: 
  - post
tags: 
  - 
---


<!-- more -->


# POI修改CellStyle不起效

# 问题

```java
def style = cell.getCellStyle()
style.setVerticalAlignment(VerticalAlignment.CENTER)
style.setAlignment(HorizontalAlignment.CENTER)
cell.setCellStyle(style)
```

我想将所有单元格的设置成垂直和水平居中，但是这么修改并不起效。

问题出在了，在Excel中这些单元格get出来的样式是全局的不是针对单个单元格的，因此并不会起效。

原因是由于在Excel的设计里面，这种样式抽取成共有变量可以节约存储成本，包括在Excel中每个文字都是单独进行存储的，在用的时候是引用的方式进行处理，类似于Java中的常量池一般，极大节约存储空间。

# 解决

只需要调用clone方法，`void cloneStyleFrom(CellStyle var1)`将原本的cell上面的样式复制一份出来

这样就能够起效了

```dava
def style = workbook.createCellStyle()
style.cloneStyleFrom(cell.getCellStyle())
style.setVerticalAlignment(VerticalAlignment.CENTER)
style.setAlignment(HorizontalAlignment.CENTER)
cell.setCellStyle(style)
```


