import { defineEventHandler } from 'h3'
import { supabase } from '~/server/utils/supabase'

export default defineEventHandler(async () => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
    
    if (error) {
      console.error('Error fetching users:', error)
      return {
        statusCode: 500,
        message: 'Failed to fetch users',
        error: error.message
      }
    }
    
    return { users: data }
  } catch (err) {
    console.error('Unexpected error:', err)
    return {
      statusCode: 500,
      message: 'An unexpected error occurred'
    }
  }
})