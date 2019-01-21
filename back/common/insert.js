/**
 * 插入
 */
function insert() {
 
    var user = new User({
        username : 'jacklin',                 //用户账号
        userpwd: 'abcd',                            //密码
        userage: 22,                                //年龄
        logindate : new Date()                      //最近登录时间
    });

    user.save(function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    });
}
module.exports = {
    insert
}