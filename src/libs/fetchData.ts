import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabase: SupabaseClient = createClient(
  String(import.meta.env['VITE_SUPABASE_URL']) || '',
  String(import.meta.env['VITE_SUPABASE_ANON']) || ''
)

const fetch = async () => {
  const { data, error } = await supabase
    .from('confess')
    .select()
    .order('created_at', {
      ascending: true
    })

  if (error) {
    console.log(error)
  }

  return !error ? data : null
}

const send = async (message: string) => {
  const { data, error } = await supabase
    .from('confess')
    .insert([{ message: message }])

  if (error) {
    console.log(error)
  }

  return !error ? data : null
}

export { send }
export default fetch
