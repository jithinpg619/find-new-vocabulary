const results = [
    {
        "vocabulary": "Ebullient",
        "meaning": "Cheerful and full of energy",
        "synonyms": ["enthusiastic", "excited", "lively"],
        "example_sentence": "Her ebullient personality made her the life of the party."
    },
    {
        "vocabulary": "Perplexed",
        "meaning": "Completely baffled; very puzzled",
        "synonyms": ["confused", "bewildered", "confounded"],
        "example_sentence": "He looked perplexed after reading the complex instructions."
    },
    {
        "vocabulary": "Eloquent",
        "meaning": "Fluent or persuasive in speaking or writing",
        "synonyms": ["articulate", "expressive", "persuasive"],
        "example_sentence": "The president gave an eloquent speech that moved the entire audience."
    },
    {
        "vocabulary": "Ephemeral",
        "meaning": "Lasting for a very short time",
        "synonyms": ["short-lived", "temporary", "transient"],
        "example_sentence": "The beauty of the sunset was ephemeral, disappearing within minutes."
    },
    {
        "vocabulary": "Mellifluous",
        "meaning": "Sweet or musical; pleasant to hear",
        "synonyms": ["smooth", "melodious", "harmonious"],
        "example_sentence": "Her mellifluous voice was soothing to everyone in the room."
    },
    {
        "vocabulary": "Voracious",
        "meaning": "Wanting or devouring great quantities of food; having a very eager approach to a particular activity",
        "synonyms": ["gluttonous", "ravenous", "insatiable"],
        "example_sentence": "He had a voracious appetite and could eat a whole pizza by himself."
    },
    {
        "vocabulary": "Sublime",
        "meaning": "Of such excellence, grandeur, or beauty as to inspire great admiration or awe",
        "synonyms": ["exalted", "majestic", "lofty"],
        "example_sentence": "The view from the mountaintop was truly sublime."
    },
    {
        "vocabulary": "Incessant",
        "meaning": "Continuing without pause or interruption",
        "synonyms": ["unending", "constant", "relentless"],
        "example_sentence": "The incessant noise from the construction site was very distracting."
    },
    {
        "vocabulary": "Fortuitous",
        "meaning": "Happening by accident or chance rather than design",
        "synonyms": ["chance", "serendipitous", "accidental"],
        "example_sentence": "It was fortuitous that they met at the airport, just as they were both heading to the same city."
    },
    {
        "vocabulary": "Tranquil",
        "meaning": "Free from disturbance; calm",
        "synonyms": ["peaceful", "serene", "calm"],
        "example_sentence": "The garden was a tranquil retreat from the hustle and bustle of city life."
    }
];

// Function to generate a random result
function generateRandomResult() {
    const randomIndex = Math.floor(Math.random() * results.length);
    return results[randomIndex];
}

// Event listener for button click
document.getElementById('generateButton').addEventListener('click', () => {
    const randomResult = generateRandomResult();
    document.getElementById('vocabulary').textContent = randomResult.vocabulary;
    document.getElementById('meaning').textContent = randomResult.meaning;
    document.getElementById('synonyms').textContent = randomResult.synonyms.join(', ');
    document.getElementById('example_sentence').textContent = randomResult.example_sentence;
});