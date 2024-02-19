import * as dotenv from 'dotenv';
import {Marketplace} from "./marketplace";

dotenv.config();

const marketplace = new Marketplace();

(async () => {
    console.info('Start');

    // both profiles should have 1 of 0xd717CC9f5F68BBc4f0bEE120b26004bfd65f272e:0 ERC 1155 tokens
    try {
        const createdOrderUsingOldProfile = await marketplace.listAsset(process.env.V4_PROFILE_ID!, true);
        console.info(`Created order using ${process.env.V4_PROFILE_ID!}, orderId: ${createdOrderUsingOldProfile}`)
    } catch (e) {
        console.error(e);
    }
    try {
        const createdOrderUsingNewProfile = await marketplace.listAsset(process.env.V5_PROFILE_ID!, true);
        console.info(`Created order using ${process.env.V4_PROFILE_ID!}, orderId: ${createdOrderUsingNewProfile}`)

    } catch (e) {
        console.error(e);
    }

    console.info('End');
})();