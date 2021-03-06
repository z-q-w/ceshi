const cookie = {
	set (name, value, days) {
        var exp = new Date()
        exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000)
        document.cookie = name + '=' + escape(value) + ';path=/;expires=' + exp.toGMTString()
    },
    //读取
    get (name) {
        var arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
        if (arr !== null) {
            return unescape(arr[2])
        } else {
            return null
        }
    },
    //删除
    del (name) {
        var exp = new Date()
        exp.setTime(exp.getTime() - 1)
        var cval = this.get(name)
        if (cval !== null) document.cookie = name + '=' + cval + ';path=/;expires=' + exp.toGMTString()
    },
}

module.exports = {
	set:cookie.set,
    get:cookie.get,
    del:cookie.del,
}
