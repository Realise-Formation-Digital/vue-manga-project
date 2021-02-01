import Home from '@/components/Home'
import Mangas from '@/components/Mangas'
import Animes from '@/components/Animes'
import Contact from '@/components/Contact'

export const routes = [
    {
      path: '/',
      component: Home
    },
    {
      path: '/mangas',
      component: Mangas
    },
    {
      path: '/animes',
      component: Animes
    },
    { 
      path: '/contact',
      component: Contact
    }
  ]