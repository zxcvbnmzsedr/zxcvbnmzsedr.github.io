---
title: >-
  处理Jackson反序列化问题：Cannot deserialize instance of java.lang.Integer out of
  VALUE_FALSE
short_title: ''
date: 2023-11-28 05:25:54
article: true
timeline: false
isOriginal: true
---


<!-- more -->


# 处理Jackson反序列化问题：Cannot deserialize instance of java.lang.Integer out of VALUE_FALSE

在使用Jackson库进行Java对象的JSON反序列化时，有时候可能会遇到错误消息："Cannot deserialize instance of `java.lang.Integer`​ out of VALUE_FALSE"。这通常是因为Jackson期望一个整数值，但实际上遇到了布尔值`false`​。

## 可能的原因和解决方案：

### 1. 类型不匹配

确保你要反序列化的Java类中，与出现问题的字段对应的类型是`Integer`​（或`int`​），而不是`Boolean`​（或`boolean`​）。

```sql
public class MyData {
    private Integer myNumber;

    // Getter和Setter方法
}
```

### 2. JSON数据不匹配

确保要反序列化的JSON数据符合期望的格式。例如，如果期望一个整数值，确保JSON字段表示为数字，而不是布尔值。

如果JSON数据不在你的控制范围内，可能需要在反序列化逻辑中显式处理这些情况。

### 3. 自定义反序列化逻辑

如果需要处理JSON中可能包含布尔值但你想将它们转换为整数的情况，可以使用自定义反序列化器。

```sql
public class MyData {
    @JsonDeserialize(using = CustomIntegerDeserializer.class)
    private Integer myNumber;

    // Getter和Setter方法
}
```

或者注册成统一的序列化规则：

```sql
  public static ObjectMapper defaultMapper() {
        final ObjectMapper om = new ObjectMapper();
        SimpleModule module = new SimpleModule();
        module.addDeserializer(Integer.class, new CustomIntegerDeserializer());
        om.registerModule(module);
        return om;
    }
```

```sql
 /**
     * 自定义Integer反序列化器
     */
    public static class CustomIntegerDeserializer extends JsonDeserializer<Integer> {
        @Override
        public Integer deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
            JsonNode node = p.readValueAsTree();
            if (node.isBoolean()) {
                return node.asBoolean() ? 1 : 0;
            } else if (node.isNumber()) {
                return node.asInt();
            } else if (node.isTextual()) {
                return Integer.parseInt(node.asText());
            } else {
                throw new IllegalArgumentException("Unexpected JSON node type for integer: " + node.getNodeType());
            }
        }
    }
```

以上示例假设如果遇到布尔值，将其转换为`1`​表示`true`​，`0`​表示`false`​。根据实际需求调整逻辑。

通过采取这些措施，你应该能够解决"Cannot deserialize instance of `java.lang.Integer`​ out of VALUE_FALSE"的问题。

记得在处理JSON数据时，保持Java类与JSON数据格式的一致性是至关重要的
