---
title: Jackson序列化继承Map类型的字段
date: 2023-02-07 15:16
permalink: /posts/Jackson%E5%BA%8F%E5%88%97%E5%8C%96%E7%BB%A7%E6%89%BFMap%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%AD%97%E6%AE%B5
categories:
- posts
tags: 
---
# Jackson序列化继承Map类型的字段

如果有一个类继承了Map类型的数据，并且这个继承的这个类包含额外的字段，就想下面这样：

```java
class FlowNode extends LinkedHashMap{
    String id
    String name
    String renderKey
    String label
    String parentKey
}
```

在序列化之后，FlowNode中的所有属性值全部都是空。

如果想要正确的获取到序列化之后的值，通常有两种方式：

1. 将动态的字段封装成一个额外的字段

    ```java
    class FlowNode {
        String id
        String name
        String renderKey
        String label
        String parentKey
        Map extra
    }
    ```
2. 遵循Map的使用规则重写Get、Set方法

    ```java
    class FlowNode extends LinkedHashMap{
        String id
        String getId(){
    	return (String) get('id');
        }
        void setId(String id){
    	return set('id');
        }
    }

    ```

很显然这两种方式都不够友好，得益于Jackson强大的定制化功能，还能够使用下面这种方式；

在位置字段的情况下，把所有数据通过注解保存到额外的`additionalProperties`​属性中，无论在序列化还是反序列化的时候都能够正确输出结果

```java
class FlowNode {
    String id
    String name
    String renderKey
    String label
    String parentKey

    FormItem[] form

    private HashMap<String, Object> additionalProperties = new HashMap<>();

    @JsonAnyGetter
    Map<String, Object> any() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    void set(String name, Object value) {
        this.additionalProperties.put(name, value);
    }
}
```

‍
