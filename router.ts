import { Router } from './deps.ts';

const router = new Router()
 
router.post('/expense', async (ctx) => {
  const body = ctx.request.body({ type: 'json' })
  const data = await body.value
  let areExpenses
  let expenses
  try {
    expenses = Deno.readTextFileSync('expenses.json')
    areExpenses = true
  } catch (e) {
    areExpenses = false
  }
  expenses = areExpenses ? JSON.parse(expenses || '') : []
  Deno.writeTextFileSync('expenses.json', JSON.stringify([...expenses, data]))
});

router.get('/expenses', (ctx) => {
  try {
    ctx.response.body = Deno.readTextFileSync('expenses.json')
  } catch (e) {
    console.error(e)
  }
})

export default router
