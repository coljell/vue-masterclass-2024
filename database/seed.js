import { fakerEN_AU as faker} from "@faker-js/faker";
import { createClient } from '@supabase/supabase-js'
import { stat } from "fs";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
)

export const seedProjects = async () => {
  const name = faker.lorem.words(3);

  const { data, error } = await supabase
    .from('projects')
    .insert({
        name: name,
        slug: name.toLocaleLowerCase().replace(/ /g, '-'),
        status: faker.helpers.arrayElement(['in-progess', 'completed']),
        collaborators: faker.helpers.arrayElements([1, 2, 3])
    })

  if (error) {
    console.error('Error seeding database:', error)
  } else {
    console.log('Database seeded successfully:', data)
  }
}

await seedProjects()

