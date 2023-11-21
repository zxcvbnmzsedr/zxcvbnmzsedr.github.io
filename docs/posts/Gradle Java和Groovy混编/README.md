---
title: Gradle Java和Groovy混编
date: 2023-02-06 15:22
permalink: /posts/Gradle%20Java%E5%92%8CGroovy%E6%B7%B7%E7%BC%96
categories:
- posts
tags: 
---
# Gradle Java和Groovy混编

首先安装Gradle插件

```java
// build.gradle
plugins {
    id 'java'
    id 'groovy'
}

dependencies {
        implementation 'org.apache.groovy:groovy-all:4.0.6'
        testImplementation 'org.apache.groovy:groovy-all:4.0.6'
}
```

加入Gradle插件之后，编译顺序就会在`compileJava`​ 之后 添加一步`compileGroovy`​的操作。

由于存在编译顺序的关系，在java代码中引用groovy的代码时候，会编译失败。

所以需要覆盖Java的源代码路径，将所有的代码防在同一个目录下，避免编译顺序带来的问题。

在build.gradle中添加下面的代码

```java
apply plugin: 'groovy'
//...
sourceSets {
  main {
    java { srcDirs = [] }    // no source dirs for the java compiler
    groovy { srcDirs = ["src/main/java", "src/main/groovy"] }  // compile   everything in src/ with groovy
  }
}
```
