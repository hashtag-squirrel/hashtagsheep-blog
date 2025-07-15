declare module 'astro:env/client' {
	export const URL: string | undefined;	
export const STRIPE_RESTRICTED_KEY: string | undefined;	

}

declare module 'astro:env/server' {
	export const STRIPE_SECRET_KEY: string | undefined;	


	export const getSecret: (key: string) => string | undefined;
}
