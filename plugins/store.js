var admin = {
    age: '30',
    name: 'admin',
    token: 'hzm0092',
    guid: 'das',
}

export default ({},inject) => {
    inject('store',{
        admin
    })
}