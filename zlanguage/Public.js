function loadProperties(lang) {
    $.i18n.properties({
        name: 'lang',  //资源文件名称 ， 命名格式： 文件名_国家代号.properties
        path: 'zlanguage/',    //资源文件路径，注意这里路径是你属性文件的所在文件夹,可以自定义。
        mode: 'map',     //用 Map 的方式使用资源文件中的值
        language: lang,  //这就是国家代号 name+language刚好组成属性文件名：strings+zh -> strings_zh.properties
        callback: function () {
            $("[data-locale]").each(function () {
                console.log($(this).data("locale"));
                $(this).html($.i18n.prop($(this).data("locale")));

            });
        }
    });
}