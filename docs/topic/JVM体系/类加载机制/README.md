---
title: 类加载机制
date: 2022-08-15 11:27
permalink: /topic/JVM%E4%BD%93%E7%B3%BB/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E6%9C%BA%E5%88%B6
topic: 
  - topic
tags: null
categories: 
  - topic
  - JVM体系
  - 类加载机制
---
# 类加载机制

> Java字节码的组织单位是类文件。类文件是Java指定的二进制的编码规范。只要通过类加载器将二进制文件加载进来，即可通过JVM运行。

# 类加载运行流程

当我们用java命令运行某个.java的文件的main函数时，首先需要通过javc编译成class文件，再由java命令进行运行。

```java
public class Test {
    int a = 1;
    int b = 2;

    public void print() {
        int c = a + b;
        System.out.println("hello world");
        System.out.print("result: ");
        System.out.println(c);
    }

    public static void main(String[] args) {
        Test t = new Test();
        t.print();
    }
}
// 通过javac Test.java 进行编译，在当前目录下会生成Test.class文件
// 再调用java Test 运行这个类
// 最后输出结果:
// hello world
// result: 3
```

通过Java命令执行代码的大体流程如下：

    ​

![](https://image.ztianzeng.com/uPic/20220815135236.png)​

**其中loadClass的类加载过程有如下几步：**

![](https://image.ztianzeng.com/uPic/20220815140039.png)​

`加载` >> `验证` >>`​ 准备 ​`>> `解析 ​`>> `初始化 ​`>>`​ 使用 ​`>>`​ 卸载`

1. 加载：

    在硬盘上查找并通过IO读入字节码文件，使用到类时才会进行加载。比如在调用类的main()方法，new 对象时，都会在内存中生成一个代表这个类的java.lang.Class对象，保存在方法区中，作为这个类的各种数据访问入口。
2. 验证：

    校验字节码文件的正确性。class是二进制格式的，需要对二进制进行校验，以保证是正确的class文件
3. 准备：

    将类的静态变量分配内存，并赋予默认值。
4. 解析：

    将符号引用替换为直接引用，该阶段会把静态方法替换成数据指向内存的指正或者句柄。在程序运行期间符号引用再替换成直接引用，完成对类的调用
5. 初始化：

    对类的静态变量初始化成指定的值，指向静态代码块
6. 使用

    类访问方法区内的数据结构的接口， 对象是Heap区的数据。
7. 卸载：

    Java虚拟机在执行完之后退出。

在整个类被加载完之后才能进行访问，在加载之后整个类都会被保存在**方法区中**，包含：**运行时常量池、类型信息、字段信息、类加载器的引用、对应class实例的引用**等。

为啥要保存类加载器？是因为由于Java的类加载机制决定了，一个类必须有一个类加载器，类和类加载器的关系是1:1的关系。如果要确定一个类，必须确定一个类的类加载器。

# 类加载的方式

类加载有三种方式:

1. 启动应用时候由JVM初始化加载

    加载主类，执行main方法

2. 通过Class.forName()方法动态加载

    将类的.class文件加载到jvm中之外，还会对类进行解释，执行类中的static块

3. 通过ClassLoader.loadClass()方法动态加载

    只干一件事情，就是将.class文件加载到jvm中，不会执行static中的内容,只有在newInstance才会去执行static块
4. 运行时动态加载

    主类在运行过程中如果使用到其它类，会逐步加载这些类。jar包或war包里的类不是一次性全部加载的，是使用到时才加载。

```java
package com.ztianzeng.learn.jvm;

public class TestDynamicLoad {
    static {
        System.out.println("*************load TestDynamicLoad************");
    }

    public static void main(String[] args) throws ClassNotFoundException {
        new A();
        System.out.println("*************load test************");
        // B不会加载，除非这里执行 new B()
        B b = null;
        ClassLoader loader = TestDynamicLoad.class.getClassLoader();
        System.out.println(loader);
        //使用ClassLoader.loadClass()来加载类，不会执行初始化块 
        loader.loadClass("com.ztianzeng.learn.jvm.Test2");
        //使用Class.forName()来加载类，默认会执行初始化块 
        Class.forName("com.ztianzeng.learn.jvm.Test2");
        //使用Class.forName()来加载类，并指定ClassLoader，初始化时不执行静态块 
      Class.forName("com.ztianzeng.learn.jvm.Test2", false, loader);
    }
}

class Test2 {
    static {
        System.out.println("静态初始化块执行了！");
    }
}

class A {
    static {
        System.out.println("*************load A************");
    }

    public A() {
        System.out.println("*************initial A************");
    }
}

class B {
    static {
        System.out.println("*************load B************");
    }

    public B() {
        System.out.println("*************initial B************");
    }
}
*************load TestDynamicLoad************
*************load A************
*************initial A************
*************load test************
jdk.internal.loader.ClassLoaders$AppClassLoader@277050dc
静态初始化块执行了！
```

# 类加载机制

* **全盘负责**

  当一个类加载器负责加载某个Class时，该Class所依赖的和引用的其他Class也将由该类加载器负责载入，除非显示使用另外一个类加载器来载入
* **父类委托**

  先让父类加载器试图加载该类，只有在父类加载器无法加载该类时才尝试从自己的类路径中加载该类
* **缓存机制**

  缓存机制将会保证所有加载过的Class都会被缓存，当程序中需要使用某个Class时，类加载器先从缓存区寻找该Class，只有缓存区不存在，系统才会读取该类对应的二进制数据，并将其转换成Class对象，存入缓存区。这就是为什么修改了Class后，必须重启JVM，程序的修改才会生效
* **双亲委派机制**

  如果一个类加载器收到了类加载的请求，它首先不会自己去尝试加载这个类，而是把请求委托给父加载器去完成，依次向上，因此，所有的类加载请求最终都应该被传递到顶层的启动类加载器中，只有当父加载器在它的搜索范围中没有找到所需的类时，即无法完成该加载，子加载器才会尝试自己去加载该类。

# 类加载器

java中的类加载过程都有由类加载器来实现的，java中有如下几种类加载器：

* 引导类加载器

  负责加载支撑JVM运行的位于JRE的lib目录下的核心类库，比如rt.jar、charsets.jar等
* 扩展类加载器

  负责加载支撑JVM运行的位于JRE的lib目录下的ext扩展目录中的JAR类包
* 应用程序类加载器

  负责加载ClassPath路径下的类包，主要就是加载你自己写的那些类
* 自定义加载器

  负责加载用户自定义路径下的类包

跑一个demo试一下：

```java
package com.ztianzeng.learn.jvm.classloader;

/**
 * @author zhaotianzeng
 */
public class ClassLoaderStudy {
    public static void main(String[] args) throws ClassNotFoundException {
        final ClassLoader appClassLoader = ClassLoader.getSystemClassLoader();
        final ClassLoader platformClassLoader = appClassLoader.getParent();
        final ClassLoader bootClassLoader = appClassLoader.getParent();
        System.out.println("systemClassLoader == " + appClassLoader);
        System.out.println("systemClassLoader == " + bootClassLoader);

        String str = "hello class loader";
        System.out.println("str class loader is == " + str.getClass().getClassLoader());
        Class driver = Class.forName("java.sql.Driver");
        System.out.println("driver class loader is == " + driver.getClassLoader());
        System.out.println("driver class loader parent is == " + driver.getClassLoader().getParent());

        ClassLoaderStudy study = new ClassLoaderStudy();
        System.out.println("study class loader is == " + study.getClass().getClassLoader());
        System.out.println("study class loader parent is == " + study.getClass().getClassLoader().getParent());
        System.out.println("study class loader parent parent is == " + study.getClass().getClassLoader().getParent().getParent());

        Class jshell = Class.forName("jdk.jshell.JShell");
        System.out.println("jshell class loader is == " + jshell.getClassLoader());
        System.out.println("jshell class loader parent is == " + jshell.getClassLoader().getParent());

        MyClassLoader classLoader = new MyClassLoader();
        Class cls = classLoader.loadClass("com.ztianzeng.learn.jvm.classloader.MyClass");

        System.out.println("cls class loader is == " + cls.getClassLoader());
        System.out.println("cls class loader parent is == " + cls.getClassLoader().getParent());

        Class driverManager = Class.forName("java.sql.DriverManager");
        System.out.println("driverManager class loader is == " + driverManager.getClassLoader());
    }
}
-----------------------------------------------------------------------------
systemClassLoader == jdk.internal.loader.ClassLoaders$AppClassLoader@277050dc
systemClassLoader == jdk.internal.loader.ClassLoaders$PlatformClassLoader@3cd1f1c8
str class loader is == null
driver class loader is == jdk.internal.loader.ClassLoaders$PlatformClassLoader@3cd1f1c8
driver class loader parent is == null
study class loader is == jdk.internal.loader.ClassLoaders$AppClassLoader@277050dc
study class loader parent is == jdk.internal.loader.ClassLoaders$PlatformClassLoader@3cd1f1c8
study class loader parent parent is == null
jshell class loader is == jdk.internal.loader.ClassLoaders$AppClassLoader@277050dc
jshell class loader parent is == jdk.internal.loader.ClassLoaders$PlatformClassLoader@3cd1f1c8
cls class loader is == com.ztianzeng.learn.jvm.classloader.MyClassLoader@67117f44
cls class loader parent is == jdk.internal.loader.ClassLoaders$AppClassLoader@277050dc
driverManager class loader is == jdk.internal.loader.ClassLoaders$PlatformClassLoader@3cd1f1c8
```

可以看到输出了的带名字的有AppClassLoader 、PlatformClassLoader，除了这两个之外还有个null。

输出为的null的是，用c++写的类加载器，BootStrap启动类加载器。AppClassLoader和PlatformClassLoader是Java代码中自带的类加载器，这两个加载器的声明在ClassLoaders的静态代码块中:

```java
static {
        // -Xbootclasspath/a or -javaagent with Boot-Class-Path attribute
        String append = VM.getSavedProperty("jdk.boot.class.path.append");
        BOOT_LOADER =
            new BootClassLoader((append != null && !append.isEmpty())
                ? new URLClassPath(append, true)
                : null);
        PLATFORM_LOADER = new PlatformClassLoader(BOOT_LOADER);
        // A class path is required when no initial module is specified.
        // In this case the class path defaults to "", meaning the current
        // working directory.  When an initial module is specified, on the
        // contrary, we drop this historic interpretation of the empty
        // string and instead treat it as unspecified.
        String cp = System.getProperty("java.class.path");
        if (cp == null || cp.isEmpty()) {
            String initialModuleName = System.getProperty("jdk.module.main");
            cp = (initialModuleName == null) ? "" : null;
        }
        URLClassPath ucp = new URLClassPath(cp, false);
        APP_LOADER = new AppClassLoader(PLATFORM_LOADER, ucp);
    }

```

PlatformClassLoader的构造函数中，声明了自己的父加载器是BootClassLoader。

AppClassLoader的构造函数中，声明了自己的父加载器是PlatformClassLoader。

```java
PlatformClassLoader(BootClassLoader parent) {
            super("platform", parent, null);
        }

AppClassLoader(PlatformClassLoader parent, URLClassPath ucp) {
            super("app", parent, ucp);
            this.ucp = ucp;
        }
```

这套机制，也被叫做双亲委派。

# 双亲委派机制

双亲委派的过程

* 当AppClassLoader加载一个class时，它首先不会自己去尝试加载这个类，而是把类加载请求委派给父类加载器PlatformClassLoader去完成。
* 当PlatformClassLoader加载一个class时，它首先也不会自己去尝试加载这个类，而是把类加载请求委派给BootStrapClassLoader去完成。
* 如果BootStrapClassLoader加载失败(例如在$JAVA_HOME/jre/lib里未查找到该class)，会使用ExtClassLoader来尝试加载；
* 若ExtClassLoader也加载失败，则会使用AppClassLoader来加载，如果AppClassLoader也加载失败，则会报出异常ClassNotFoundException。

![](https://image.ztianzeng.com/uPic/20220815174142.png)​

**双亲委派的好处**

* 沙箱安全机制：自己写的java.lang.String.class类不会被加载，这样便可以防止核心API库被随意篡改
* 避免类的重复加载：当父亲已经加载了该类时，就没有必要子ClassLoader再加载一次，保证被加载类的唯一性

**双亲委派代码实现**

```java
//ClassLoader的loadClass方法，里面实现了双亲委派机制
protected Class<?> loadClass(String name, boolean resolve)
    throws ClassNotFoundException
{
    synchronized (getClassLoadingLock(name)) {
        // 检查当前类加载器是否已经加载了该类
        Class<?> c = findLoadedClass(name);
        if (c == null) {
            long t0 = System.nanoTime();
            try {
                if (parent != null) {  //如果当前加载器父加载器不为空则委托父加载器加载该类
                    c = parent.loadClass(name, false);
                } else {  //如果当前加载器父加载器为空则委托引导类加载器加载该类
                    c = findBootstrapClassOrNull(name);
                }
            } catch (ClassNotFoundException e) {
                // ClassNotFoundException thrown if class not found
                // from the non-null parent class loader
            }

            if (c == null) {
                // If still not found, then invoke findClass in order
                // to find the class.
                long t1 = System.nanoTime();
                //都会调用URLClassLoader的findClass方法在加载器的类路径里查找并加载该类
                c = findClass(name);

                // this is the defining class loader; record the stats
                PerfCounter.getParentDelegationTime().addTime(t1 - t0);
                PerfCounter.getFindClassTime().addElapsedTimeFrom(t1);
                PerfCounter.getFindClasses().increment();
            }
        }
        if (resolve) {  //不会执行
            resolveClass(c);
        }
        return c;
    }
}
```

## 自定义类加载器

通常情况下，我们都是直接使用系统类加载器。但是，有的时候，我们也需要自定义类加载器。比如应用是通过网络来传输 Java 类的字节码，为保证安全性，这些字节码经过了加密处理，这时系统类加载器就无法对其进行加载，这样则需要自定义类加载器来实现。自定义类加载器一般都是继承自 ClassLoader 类，从上面对 loadClass 方法来分析来看，我们只需要重写 findClass 方法即可。下面我们通过一个示例来演示自定义类加载器:

```java
package com.ztianzeng.learn.jvm.classloader;

import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.InputStream;

public class MyClassLoader extends ClassLoader {
    public MyClassLoader() {
    }

    @Override
    protected Class<?> findClass(String name) throws ClassNotFoundException {
        byte[] data = loadClassData(name);

        return this.defineClass(name, data, 0, data.length);
    }

    private byte[] loadClassData(String clsName) {
        byte[] data = null;
        InputStream in;
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        clsName = clsName.replaceAll("\\.", "/");
        try (out) {
            in = new FileInputStream("classes/" + clsName + ".class");
            int a;
            while ((a = in.read()) != -1) {
                out.write(a);
            }
            data = out.toByteArray();
        } catch (Exception e) {

        }
        return data;
    }
}

```

自定义类加载器的核心在于对字节码文件的获取，如果是加密的字节码则需要在该类中对文件进行解密。由于这里只是演示，我并未对class文件进行加密，因此没有解密的过程。

**这里有几点需要注意** :

1、这里传递的文件名需要是类的全限定性名称，即`com.ztianzeng.learn.jvm.classloader.Test2`格式的，因为 defineClass 方法是按这种格式进行处理的。

2、最好不要重写loadClass方法，因为这样容易破坏双亲委托模式。

3、这类Test 类本身可以被 AppClassLoader 类加载，因此我们不能把com/ztianzeng/learn/jvm/classloader/Test2.class 放在类路径下。否则，由于双亲委托机制的存在，会直接导致该类由 AppClassLoader 加载，而不会通过我们自定义类加载器来加载。

# 打破双亲委派机制

**Tomcat 如果使用默认的双亲委派类加载机制行不行？**

我们思考一下：Tomcat是个web容器， 那么它要解决什么问题：

1. 一个web容器可能需要部署两个应用程序，不同的应用程序可能会依赖同一个第三方类库的不同版本，不能要求同一个类库在同一个服务器只有一份，因此要保证每个应用程序的类库都是独立的，保证相互隔离。
2. 部署在同一个web容器中相同的类库相同的版本可以共享。否则，如果服务器有10个应用程序，那么要有10份相同的类库加载进虚拟机。
3. web容器也有自己依赖的类库，不能与应用程序的类库混淆。基于安全考虑，应该让容器的类库和程序的类库隔离开来。
4. web容器要支持jsp的修改，我们知道，jsp 文件最终也是要编译成class文件才能在虚拟机中运行，但程序运行后修改jsp已经是司空见惯的事情， web容器需要支持 jsp 修改后不用重启。

**再看看我们的问题：Tomcat 如果使用默认的双亲委派类加载机制行不行？**

答案是不行的。为什么？

1. 如果使用默认的类加载器机制，那么是无法加载两个相同类库的不同版本的，默认的类加器是不管你是什么版本的，只在乎你的全限定类名，并且只有一份。

2. 默认的类加载器是能够实现的，因为他的职责就是保证唯一性。

3. 要怎么实现jsp文件的热加载，jsp 文件其实也就是class文件，那么如果修改了，但类名还是一样，类加载器会直接取方法区中已经存在的，修改后的jsp是不会重新加载的。那么怎么办呢？我们可以直接卸载掉这jsp文件的类加载器，所以你应该想到了，每个jsp文件对应一个唯一的类加载器，当一个jsp文件修改了，就直接卸载这个jsp类加载器。重新创建类加载器，重新加载jsp文件。

# Tomcat自定义类加载器

![](https://image.ztianzeng.com/uPic/20220815193420.png)​

tomcat的几个主要类加载器：

* commonLoader：Tomcat最基本的类加载器，加载路径中的class可以被Tomcat容器本身以及各个Webapp访问；
* catalinaLoader：Tomcat容器私有的类加载器，加载路径中的class对于Webapp不可见；
* sharedLoader：各个Webapp共享的类加载器，加载路径中的class对于所有Webapp可见，但是对于Tomcat容器不可见；
* WebappClassLoader：各个Webapp私有的类加载器，加载路径中的class只对当前Webapp可见，比如加载war包里相关的类，每个war包应用都有自己的WebappClassLoader，实现相互隔离，比如不同war包应用引入了不同的spring版本，这样实现就能加载各自的spring版本；

从图中的委派关系中可以看出：

`CommonClassLoader`能加载的类都可以被`CatalinaClassLoader`和`SharedClassLoader`使用，从而实现了公有类库的共用，而`CatalinaClassLoader`和`SharedClassLoader`自己能加载的类则与对方相互隔离。

`WebAppClassLoader`可以使用`SharedClassLoader`加载到的类，但各个`WebAppClassLoader`实例之间相互隔离。

而`JasperLoader`的加载范围仅仅是这个JSP文件所编译出来的那一个.class文件，它出现的目的就是为了被丢弃：

当Web容器检测到JSP文件被修改时，会替换掉目前的JasperLoader的实例，并通过再建立一个新的Jsp类加载器来实现JSP文件的热加载功能。

tomcat 这种类加载机制违背了java 推荐的双亲委派模型，每个`webappClassLoader`加载自己的目录下的class文件，不会传递给父类加载器，打破了双亲委派机制。

**用代码来模拟一下这个加载过程：**

```java
package com.ztianzeng.learn.jvm.classloader;

import java.io.FileInputStream;
import java.lang.reflect.Method;

public class MyClassLoaderTest {
    static class MyClassLoader extends ClassLoader {
        private String classPath;

        public MyClassLoader(String classPath) {
            this.classPath = classPath;
        }

        private byte[] loadByte(String name) throws Exception {
            name = name.replaceAll("\\.", "/");
            FileInputStream fis = new FileInputStream(classPath + "/" + name
                    + ".class");
            int len = fis.available();
            byte[] data = new byte[len];
            fis.read(data);
            fis.close();
            return data;

        }

        protected Class<?> findClass(String name) throws ClassNotFoundException {
            try {
                byte[] data = loadByte(name);
                return defineClass(name, data, 0, data.length);
            } catch (Exception e) {
                e.printStackTrace();
                throw new ClassNotFoundException();
            }
        }

        /**
         * 重写类加载方法，实现自己的加载逻辑，不委派给双亲加载
         * @param name
         * @param resolve
         * @return
         * @throws ClassNotFoundException
         */
        protected Class<?> loadClass(String name, boolean resolve)
                throws ClassNotFoundException {
            synchronized (getClassLoadingLock(name)) {
                // First, check if the class has already been loaded
                Class<?> c = findLoadedClass(name);

                if (c == null) {
                    // If still not found, then invoke findClass in order
                    // to find the class.
                    long t1 = System.nanoTime();

                    //非自定义的类还是走双亲委派加载
                    if (!name.startsWith("com.ztianzeng.learn.jvm")){
                        c = this.getParent().loadClass(name);
                    }else{
                        c = findClass(name);
                    }
                }
                if (resolve) {
                    resolveClass(c);
                }
                return c;
            }
        }
    }

    public static void main(String args[]) throws Exception {
        MyClassLoader classLoader = new MyClassLoader("D:/test");
        Class clazz = classLoader.loadClass("com.ztianzeng.learn.jvm.User1");
        Object obj = clazz.newInstance();
        Method method= clazz.getDeclaredMethod("sout", null);
        method.invoke(obj, null);
        System.out.println(clazz.getClassLoader());
      
        System.out.println();
        MyClassLoader classLoader1 = new MyClassLoader("D:/test1");
        Class clazz1 = classLoader1.loadClass("com.ztianzeng.learn.jvm.User1");
        Object obj1 = clazz1.newInstance();
        Method method1= clazz1.getDeclaredMethod("sout", null);
        method1.invoke(obj1, null);
        System.out.println(clazz1.getClassLoader());
    }
}
```

> 注意：同一个JVM内，两个相同包名和类名的类对象可以共存，因为他们的类加载器可以不一样，所以看两个类对象是否是同一个，除了看类的包名和类名是否都相同之外，还需要他们的类加载器也是同一个才能认为他们是同一个。

‍
