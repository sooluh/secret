import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabase: SupabaseClient = createClient(
  String(import.meta.env['VITE_SUPABASE_URL']) || '',
  String(import.meta.env['VITE_SUPABASE_ANON']) || ''
)

const results = async () => {
  const { data, error } = await supabase
    .from('confess')
    .select('id, message, parent, created_at')
    .is('deleted_at', null)
    .eq('active', true)
    .order('created_at', {
      ascending: false
    })

  if (error) {
    console.log(error)
  }

  return !error ? data : null
}

const send = async (message: string) => {
  const { data, error } = await supabase.from('confess').insert([
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
