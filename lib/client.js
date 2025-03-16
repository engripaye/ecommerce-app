import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url";

const client = SanityClient({
    projectId: '',
    dataset: '',
    apiVersion: '',
    useCdn: true,
    token: ''
})