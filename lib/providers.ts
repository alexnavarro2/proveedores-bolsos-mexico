import data from '@/data/providers.json'
import type { Provider } from '@/types/provider'
export const providers = data as Provider[]
export const getProvider = (slug:string) => providers.find(p=>p.slug===slug)
