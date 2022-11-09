const SUPABASE_URL = 'https://yyafrnrhvbvehifltlkl.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5YWZybnJodmJ2ZWhpZmx0bGtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU5NDA2NDEsImV4cCI6MTk3MTUxNjY0MX0.xMaK7QxF8ut26HwnOeZONCj9728N9XXm0bIknwpAUtg';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getPlants(plantType) {
    let query = client.from('plants').select('*').order('Common_Name').limit(100);

    // if there is a plant type given to the function, filter the response by type
    if (plantType) {
        query = query.eq('Plant_Type', plantType);
    }
    const response = await query;

    return response;
}

export async function getTypes() {
    const response = await client.from('plant_types').select('*');
    return response;
}

// export async function getPlantsByType(plantType) {
//     const response = await client.from('plants').select('*').eq('Plant_Type', plantType);
//     console.log(response);
//     return response;
// }
