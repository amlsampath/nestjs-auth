import { Controller, Get, Inject, UnauthorizedException } from '@nestjs/common';
import { REQUEST } from '@nestjs/core/router/request';

@Controller('data')
export class DataController {
    constructor(@Inject(REQUEST) private request: Request) { }
    @Get()
    getData() {

        const headerData = this.request.headers;

        const token = headerData['authorization'];
        // const bearerToken = token.split(' ')[1];

        if (token !== 'YOUR_BEARER_TOKEN') {
            throw new UnauthorizedException('Invalid token');
        }

        return {
            message: 'Data retrieved successfully', data: {
                "message": "hi"
            }
        };
    }

}
