// 检测手机号是否输入正确
export function testPhone(phone) {
    let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[35678]|18[0-9]|19[0-9]|14[57])[0-9]{8}$/;
    if (reg.test(phone)) {
        return true;
    }
    return false;
}

// 检测邮箱是否输入正确
export function testEmail(email) {
    let reg = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/;
    if (reg.test(email)) {
        return true;
    }

    return false;
}

// 检测密码的验证   
export function testPwd(pwd) {
    let reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)^.{8,16}$/;
    if (reg.test(pwd)) {
        return true;
    }
    return false;
}
let txt = ['邮箱格式不正确', '手机号格式不正确'];
function txtVal(params, callback) {
    return callback(new Error(params));
}
// 手机号和邮箱为一个表单的      以是否有@符为标准
export function phoneAndEmail(rule, value, callback) {
    let phone = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[35678]|18[0-9]|19[0-9]|14[57])[0-9]{8}$/;
    let email = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/;
    if (rule.field == 'email') {
        if (!email.test(value)) {
            txtVal(txt[0], callback);
        }
        callback();
    } else if (rule.field == 'phone') {
        if (!phone.test(value)) {
            txtVal(txt[1], callback);
        }
        callback();
    } else {
        if (!email.test(value)) {
            txtVal(txt[0], callback);
        }
        callback();

    }


}
