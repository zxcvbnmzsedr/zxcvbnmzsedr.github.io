---
title: Jackson配置BigDecimal序列化保留小数点位数
short_title: ''
date: 2024-03-19 12:27:34
article: true
timeline: false
isOriginal: true
---


<!-- more -->


# Jackson配置BigDecimal序列化保留小数点位数

在项目中，某些业务中的BigDecimal有的要保留2位，有的需要保留4位，如果需要在代码中挨个判断，非常繁琐。

所以，可以利用Jackson自定义序列化的方式实现动态配置。

先声明自定义的`JsonSerializer`​

```pgsql
public class BigDecimalDynamicSerializer extends JsonSerializer<BigDecimal>{
	@Override
    public void serialize(BigDecimal value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
        if (ObjectUtil.isNotEmpty(value)) {
            BigDecimal number = value.setScale(2, RoundingMode.HALF_UP);
            gen.writeNumber(number);
        } else {
            gen.writeNumber(value);
        }
    }
}
```

在使用中直接在字段上加上，`@JsonSerialize(using = BigDecimalDynamicSerializer.class)`​

‍

这种方式只能统一序列化成2位小数。

因此还需要借助自定义注解，将注解中声明字段

```pgsql
@Retention(RetentionPolicy.RUNTIME)
@JacksonAnnotationsInside
@JsonSerialize(using = BigDecimalDynamicSerializer.class)
public @interface BigDecimalScale {

    int scale() default 2;

    RoundingMode roundingMode() default RoundingMode.HALF_UP;
}

```

类还需要继承`ContextualSerializer`​。

​`ContextualSerializer`​是 Jackson 提供的另一个序列化相关的接口，它的作用是通过字段已知的上下文信息定制`JsonSerializer`​，只需要实现`createContextual`​方法即可：

完整代码如下：

```pgsql
public class BigDecimalDynamicSerializer extends JsonSerializer<BigDecimal> implements ContextualSerializer {
    private final int scale;
    private final RoundingMode roundingMode;

    public BigDecimalDynamicSerializer() {
        this.scale = 2;
        this.roundingMode = RoundingMode.HALF_UP;
    }

    public BigDecimalDynamicSerializer(int scale, RoundingMode roundingMode) {
        this.scale = scale;
        this.roundingMode = roundingMode;
    }

    @Override
    public void serialize(BigDecimal value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
        if (ObjectUtil.isNotEmpty(value)) {
            BigDecimal number = value.setScale(scale, roundingMode);
            gen.writeNumber(number);
        } else {
            gen.writeNumber(value);
        }
    }

    @Override
    public JsonSerializer<?> createContextual(SerializerProvider prov, BeanProperty property) throws JsonMappingException {
        if (property != null) {
            BigDecimalScale annotation = property.getAnnotation(BigDecimalScale.class);
            if (annotation != null) {
                return new BigDecimalDynamicSerializer(annotation.scale(), annotation.roundingMode());
            }
        }
        return prov.findValueSerializer(BigDecimal.class, property);
    }
}

```
