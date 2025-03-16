/**
 * Type definition for ipinfo.io API response
 * Example: https://ipinfo.io/{ip}?token={token}
 */
export type IpInfoResponse = {
    ip?: string;
    hostname?: string;
    city?: string;
    region?: string;
    country?: string;
    loc?: string;
    org?: string;
    postal?: string;
    timezone?: string;
};
