import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [
      {
        slug: 'katsu-curry',
        title: 'Katsu Curry',
        description: 'Hidupmu memang berat Tp akan lebih berat lg jika dirimu diam ditempat dan tidak mau berjaln',
        ingredients: [
          '1 tablespoon olive oil',
          '1 onion, chopped',
          '2 cloves garlic, chopped',
          '1 tablespoon curry powder',
        ],
        method: [
          'Heat oil in a large skillet over medium heat.',
          'Add onion and garlic and cook, stirring often, until softened, about 5 minutes.',
          'Add curry powder and cook, stirring, until fragrant, about 1 minute.',
          'Add chicken and potatoes and cook, stirring, until heated through, about 5 minutes.',
        ]
      },
      {
        slug: 'ramen-noodle-soup',
        title: 'Ramen noodle soup',
        description: 'Hidupmu memang berat Tp akan lebih berat lg jika dirimu diam ditempat dan tidak mau berjaln',
        ingredients: [
          '1 tablespoon olive oil',
          '1 onion, chopped',
          '2 cloves garlic, chopped',
          '1 tablespoon curry powder',
        ],
        method: [
          'Heat oil in a large skillet over medium heat.',
          'Add onion and garlic and cook, stirring often, until softened, about 5 minutes.',
          'Add curry powder and cook, stirring, until fragrant, about 1 minute.',
          'Add chicken and potatoes and cook, stirring, until heated through, about 5 minutes.',
        ]
      },
      {
        slug: 'Hari INI',
        title: 'Hari INI',
        description: '"Apapun yang dilakukan oleh seseorang itu, hendaknya dapat bermanfaat bagi dirinya sendiri, bermanfaat bagi bangsanya, dan bermanfaat bagi manusia di dunia pada umumnya". - Ki Hadjar Dewantara',
        ingredients: [
          '1 "Ilmu adalah yang memberikan manfaat, bukan yang sekedar hanya dhafal." - Imam Syafii',
          '1 "Pendidikan bukan cuma pergi ke sekolah dan mendapatkan gelar. Tapi juga soal memperluas pengetahuan dan menyerap ilmu kehidupan." - Shakuntala Devi',
        ],
        method: [
          '"Pembelajaran tidak didapatkan dengan kebetulan, ia harus dicari dengan semangat dan disimak dengan tekun." - Abigai Adams',
          '"Jangan pernah berhenti belajar karena hidup tak pernah berhenti mengajarkan."',
          ' "Apa yang kita kira itu sebuah cobaan yang pahit seringkali menjadi berkah yang tersamarkan." - Oscar Wilde',
          'Kalau mau menunggu sampai kita siap, kita akan menghabiskan sisa hidup kita hanya untuk menunggu." - Lemony Snicket',
        ]
      }
    ]
  },
  mutations: {
    ADD_RECIPE (state, recipe) {
      state.recipes.push(recipe)
    }
  }
})
