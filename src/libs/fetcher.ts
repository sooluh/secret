import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabase: SupabaseClient = createClient(
  String(import.meta.env['VITE_SUPABASE_URL']) || '',
  String(import.meta.env['VITE_SUPABASE_ANON']) || ''
)

const results = async () => {
  const { data, error } = await supabase
    .from('secret')
    .select('id, message, parent, created')
    .is('deleted', null)
    .eq('active', true)
    .order('created', {
      ascending: false
    })

  if (error) {
    console.log(error)
  }

  return !error ? data : null
}

const send = async (message: string) => {
  const { data, error } = await supabase.from('secret').insert([
    {
      message: message,
      active: false
    }
  ])

  if (error) {
    console.log(error)
  }

  return !error ? data : null
}

export { send }
export default results
