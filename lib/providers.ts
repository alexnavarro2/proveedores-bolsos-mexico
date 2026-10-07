import p1 from '@/data/providers-1.json'
import p2 from '@/data/providers-2.json'
import p3 from '@/data/providers-3.json'
import p4 from '@/data/providers-4.json'
import p5 from '@/data/providers-5.json'
import p6 from '@/data/providers-6.json'
import type { Provider } from '@/types/provider'

export const providers = [...p1,...p2,...p3,...p4,...p5,...p6] as Provider[]
export const getProvider = (slug:string) => providers.find(p=>p.slug===slug)
