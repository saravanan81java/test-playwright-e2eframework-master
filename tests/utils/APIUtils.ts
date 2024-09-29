export class APIUtils {
    apicontext: any;

    constructor(apicontext) {
        this.apicontext = apicontext;
    }

    async loginMethod(loginPayload) {

        const loginAPI = await this.apicontext.post('https://rahulshettyacademy.com/api/ecom/auth/login', {
            data: loginPayload
        })
        console.log(loginAPI.status())
        const responseBody = await loginAPI.json()
        console.log(responseBody)
        const token = await responseBody.token
        console.log(token)
        return token;
    }
}