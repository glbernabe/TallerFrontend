const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

if (!STRAPI_URL) {
  throw new Error("STRAPI_URL no está definida");
}

if (!STRAPI_API_TOKEN) {
  throw new Error("STRAPI_API_TOKEN no está definida");
}

export async function strapiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${STRAPI_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      ...options?.headers,
    },
  });

  if (!response.ok) {
    const errorBody = await response.text();

    throw new Error(
        `Strapi respondió con ${response.status}: ${errorBody}`
    );
}

  return response.json();
}