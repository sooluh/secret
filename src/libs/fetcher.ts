import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabase: SupabaseClient = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON || ''
)

const results = async () => {
  const { data, error } = await supabase
    .from('messages')
    .select('id, message, owner, parent, created')
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

const send = async (message: string, parent?: number) => {
  const { data, error } = await supabase.from('messages').insert([
    {
      message: message,
      active: false,
      parent: parent || null
    }
  ])

  if (error) {
    console.log(error)
  }

  return !error ? data : null
}

export { send }
export default results
