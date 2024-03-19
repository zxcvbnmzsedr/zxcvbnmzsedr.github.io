(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{373:function(e,n,i){"use strict";i.r(n);var a=i(7),r=Object(a.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"jackson配置bigdecimal序列化保留小数点位数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jackson配置bigdecimal序列化保留小数点位数"}},[e._v("#")]),e._v(" Jackson配置BigDecimal序列化保留小数点位数")]),e._v(" "),n("p",[e._v("在项目中，某些业务中的BigDecimal有的要保留2位，有的需要保留4位，如果需要在代码中挨个判断，非常繁琐。")]),e._v(" "),n("p",[e._v("所以，可以利用Jackson自定义序列化的方式实现动态配置。")]),e._v(" "),n("p",[e._v("先声明自定义的"),n("code",[e._v("JsonSerializer")]),e._v("​")]),e._v(" "),n("div",{staticClass:"language-pgsql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public class BigDecimalDynamicSerializer extends JsonSerializer<BigDecimal>{\n\t@Override\n    public void serialize(BigDecimal value, JsonGenerator gen, SerializerProvider serializers) throws IOException {\n        if (ObjectUtil.isNotEmpty(value)) {\n            BigDecimal number = value.setScale(2, RoundingMode.HALF_UP);\n            gen.writeNumber(number);\n        } else {\n            gen.writeNumber(value);\n        }\n    }\n}\n")])])]),n("p",[e._v("在使用中直接在字段上加上，"),n("code",[e._v("@JsonSerialize(using = BigDecimalDynamicSerializer.class)")]),e._v("​")]),e._v(" "),n("p",[e._v("‍")]),e._v(" "),n("p",[e._v("这种方式只能统一序列化成2位小数。")]),e._v(" "),n("p",[e._v("因此还需要借助自定义注解，将注解中声明字段")]),e._v(" "),n("div",{staticClass:"language-pgsql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("@Retention(RetentionPolicy.RUNTIME)\n@JacksonAnnotationsInside\n@JsonSerialize(using = BigDecimalDynamicSerializer.class)\npublic @interface BigDecimalScale {\n\n    int scale() default 2;\n\n    RoundingMode roundingMode() default RoundingMode.HALF_UP;\n}\n\n")])])]),n("p",[e._v("类还需要继承"),n("code",[e._v("ContextualSerializer")]),e._v("​。")]),e._v(" "),n("p",[e._v("​"),n("code",[e._v("ContextualSerializer")]),e._v("​是 Jackson 提供的另一个序列化相关的接口，它的作用是通过字段已知的上下文信息定制"),n("code",[e._v("JsonSerializer")]),e._v("​，只需要实现"),n("code",[e._v("createContextual")]),e._v("​方法即可：")]),e._v(" "),n("p",[e._v("完整代码如下：")]),e._v(" "),n("div",{staticClass:"language-pgsql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public class BigDecimalDynamicSerializer extends JsonSerializer<BigDecimal> implements ContextualSerializer {\n    private final int scale;\n    private final RoundingMode roundingMode;\n\n    public BigDecimalDynamicSerializer() {\n        this.scale = 2;\n        this.roundingMode = RoundingMode.HALF_UP;\n    }\n\n    public BigDecimalDynamicSerializer(int scale, RoundingMode roundingMode) {\n        this.scale = scale;\n        this.roundingMode = roundingMode;\n    }\n\n    @Override\n    public void serialize(BigDecimal value, JsonGenerator gen, SerializerProvider serializers) throws IOException {\n        if (ObjectUtil.isNotEmpty(value)) {\n            BigDecimal number = value.setScale(scale, roundingMode);\n            gen.writeNumber(number);\n        } else {\n            gen.writeNumber(value);\n        }\n    }\n\n    @Override\n    public JsonSerializer<?> createContextual(SerializerProvider prov, BeanProperty property) throws JsonMappingException {\n        if (property != null) {\n            BigDecimalScale annotation = property.getAnnotation(BigDecimalScale.class);\n            if (annotation != null) {\n                return new BigDecimalDynamicSerializer(annotation.scale(), annotation.roundingMode());\n            }\n        }\n        return prov.findValueSerializer(BigDecimal.class, property);\n    }\n}\n\n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);