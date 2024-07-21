// /app/dashboard/events/[id]/page.tsx
import { getEvent } from '@/utils/events'
import { getCurrentUser } from '@/utils/user'
import { redirect } from 'next/navigation'

const EventPage = async ({ params }) => {
  const user = await getCurrentUser()
  const event = await getEvent(user.id, params.slug)

  if (!event) redirect('/dashboard/events')

  return <div>{event.name}</div>
}

export default EventPage
