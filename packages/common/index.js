const yup = require('yup')

export const userSchema = yup.object().shape({
    username: yup.string().min(4),
    password: yup.string().test('password', '패스워드로 부적합합니다.', (value) => {
        if (value.length >= 4) {
            return true
        } else {
            return false
        }
    })
})