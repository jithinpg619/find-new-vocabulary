const results = [
  {
    vocabulary: "Ebullient",
    meaning: "Cheerful and full of energy",
    synonyms: ["enthusiastic", "excited", "lively"],
    example_sentence:
      "Her ebullient personality made her the life of the party.",
  },
  {
    vocabulary: "Aberration",
    meaning: "A departure from what is normal or expected",
    synonyms: ["anomaly", "deviation", "irregularity"],
    example_sentence:
      "The sudden drop in temperature was an aberration from the usual weather pattern.",
  },
  {
    vocabulary: "Abstruse",
    meaning: "Difficult to understand; obscure",
    synonyms: ["complex", "esoteric", "enigmatic"],
    example_sentence:
      "The professor's lecture was so abstruse that many students had trouble following it.",
  },
  {
    vocabulary: "Acrimonious",
    meaning: "Angry and bitter in tone",
    synonyms: ["hostile", "harsh", "resentful"],
    example_sentence:
      "The acrimonious debate left both sides feeling frustrated and bitter.",
  },
  {
    vocabulary: "Altruistic",
    meaning: "Showing selfless concern for others",
    synonyms: ["selfless", "benevolent", "compassionate"],
    example_sentence:
      "Her altruistic nature led her to volunteer at the shelter every weekend.",
  },
  {
    vocabulary: "Apathy",
    meaning: "Lack of interest, enthusiasm, or concern",
    synonyms: ["indifference", "unconcern", "disinterest"],
    example_sentence:
      "The apathy of the voters was evident in the low turnout at the polls.",
  },
  {
    vocabulary: "Benevolent",
    meaning: "Well-meaning and kindly",
    synonyms: ["kind", "charitable", "generous"],
    example_sentence:
      "The benevolent donor contributed a large sum to the local hospital.",
  },
  {
    vocabulary: "Bolster",
    meaning: "To support or strengthen",
    synonyms: ["support", "reinforce", "boost"],
    example_sentence: "The new evidence helped to bolster her argument.",
  },
  {
    vocabulary: "Cacophony",
    meaning: "A harsh, discordant mixture of sounds",
    synonyms: ["din", "racket", "clamor"],
    example_sentence:
      "The cacophony of the city streets made it difficult to concentrate.",
  },
  {
    vocabulary: "Convoluted",
    meaning: "Extremely complex and difficult to follow",
    synonyms: ["complex", "intricate", "tangled"],
    example_sentence:
      "The plot of the novel was so convoluted that many readers struggled to understand it.",
  },
  {
    vocabulary: "Cursory",
    meaning: "Hasty and therefore not thorough or detailed",
    synonyms: ["superficial", "quick", "brief"],
    example_sentence:
      "The inspector gave the room only a cursory glance before leaving.",
  },
  {
    vocabulary: "Deference",
    meaning: "Respect and esteem due to a superior or elder",
    synonyms: ["respect", "esteem", "regard"],
    example_sentence:
      "In deference to her experience, he allowed her to take the lead in the project.",
  },
  {
    vocabulary: "Eloquent",
    meaning: "Fluent or persuasive in speaking or writing",
    synonyms: ["articulate", "expressive", "persuasive"],
    example_sentence: "Her eloquent speech moved the audience to tears.",
  },
  {
    vocabulary: "Enervate",
    meaning: "To cause someone to feel drained of energy or vitality",
    synonyms: ["weaken", "exhaust", "drain"],
    example_sentence:
      "The long hike enervated him, leaving him feeling completely drained.",
  },
  {
    vocabulary: "Ephemeral",
    meaning: "Lasting for a very short time",
    synonyms: ["short-lived", "transient", "momentary"],
    example_sentence:
      "The beauty of the sunset was ephemeral, fading quickly as night fell.",
  },
  {
    vocabulary: "Furtive",
    meaning:
      "Attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble",
    synonyms: ["secretive", "sly", "sneaky"],
    example_sentence:
      "He gave a furtive glance around the room before slipping the letter into his pocket.",
  },
  {
    vocabulary: "Gregarious",
    meaning: "Fond of company; sociable",
    synonyms: ["sociable", "outgoing", "extroverted"],
    example_sentence:
      "Her gregarious nature made her the center of attention at every gathering.",
  },
  {
    vocabulary: "Impede",
    meaning: "To delay or prevent someone or something by obstructing them",
    synonyms: ["hinder", "block", "obstruct"],
    example_sentence:
      "The roadwork will impede traffic flow for the next few weeks.",
  },
  {
    vocabulary: "Ineffable",
    meaning: "Too great or extreme to be expressed or described in words",
    synonyms: ["indescribable", "inexpressible", "beyond words"],
    example_sentence:
      "The beauty of the sunset was ineffable, leaving us speechless.",
  },
  {
    vocabulary: "Lethargic",
    meaning: "Affected by lethargy; sluggish and apathetic",
    synonyms: ["sluggish", "drowsy", "listless"],
    example_sentence:
      "After the long meeting, everyone felt too lethargic to continue working.",
  },
  {
    vocabulary: "Mendacious",
    meaning: "Not telling the truth; lying",
    synonyms: ["dishonest", "deceitful", "untruthful"],
    example_sentence:
      "His mendacious statements were quickly exposed by the fact-checkers.",
  },
  {
    vocabulary: "Nefarious",
    meaning: "Wicked or criminal",
    synonyms: ["evil", "sinister", "villainous"],
    example_sentence:
      "The nefarious plot was uncovered before it could cause any harm.",
  },
  {
    vocabulary: "Obfuscate",
    meaning:
      "To deliberately make something unclear or difficult to understand",
    synonyms: ["confuse", "cloud", "complicate"],
    example_sentence:
      "The lawyer's use of technical jargon only served to obfuscate the issue further.",
  },
  {
    vocabulary: "Ostentatious",
    meaning:
      "Characterized by vulgar or pretentious display; designed to impress or attract notice",
    synonyms: ["showy", "pretentious", "flamboyant"],
    example_sentence:
      "Her ostentatious dress drew everyone's attention at the party.",
  },
  {
    vocabulary: "Paragon",
    meaning: "A model of excellence or perfection",
    synonyms: ["model", "ideal", "exemplar"],
    example_sentence:
      "He was considered a paragon of virtue and integrity in the community.",
  },
  {
    vocabulary: "Quintessential",
    meaning:
      "Representing the most perfect or typical example of a quality or class",
    synonyms: ["perfect", "ideal", "exemplary"],
    example_sentence:
      "The quaint village was the quintessential example of rural charm.",
  },
  {
    vocabulary: "Recalcitrant",
    meaning: "Having an obstinately uncooperative attitude",
    synonyms: ["stubborn", "uncooperative", "defiant"],
    example_sentence:
      "The recalcitrant student refused to follow the teacher's instructions.",
  },
  {
    vocabulary: "Sanguine",
    meaning:
      "Optimistic or positive, especially in an apparently bad or difficult situation",
    synonyms: ["optimistic", "hopeful", "confident"],
    example_sentence:
      "Despite the setbacks, she remained sanguine about the project's success.",
  },
  {
    vocabulary: "Taciturn",
    meaning: "Reserved or uncommunicative in speech; saying little",
    synonyms: ["reserved", "silent", "uncommunicative"],
    example_sentence:
      "His taciturn nature made him a difficult person to get to know.",
  },
  {
    vocabulary: "Ubiquitous",
    meaning: "Present, appearing, or found everywhere",
    synonyms: ["omnipresent", "everywhere", "universal"],
    example_sentence: "Smartphones have become ubiquitous in modern society.",
  },
  {
    vocabulary: "Vacillate",
    meaning: "To alternate or waver between different opinions or actions",
    synonyms: ["waver", "fluctuate", "hesitate"],
    example_sentence:
      "She vacillated between going to the party and staying home to study.",
  },
  {
    vocabulary: "Warrant",
    meaning: "To justify or necessitate a certain course of action",
    synonyms: ["justify", "necessitate", "validate"],
    example_sentence:
      "The evidence presented in court did not warrant a conviction.",
  },
  {
    vocabulary: "Xenophobic",
    meaning:
      "Having or showing a dislike of or prejudice against people from other countries",
    synonyms: ["prejudiced", "intolerant", "bigoted"],
    example_sentence:
      "The xenophobic remarks made during the speech were condemned by the community.",
  },
  {
    vocabulary: "Yen",
    meaning: "A strong desire or craving",
    synonyms: ["craving", "desire", "longing"],
    example_sentence:
      "She had a yen for adventure and travel that led her to explore distant countries.",
  },
  {
    vocabulary: "Zealous",
    meaning:
      "Having or showing great energy or enthusiasm in pursuit of a cause or objective",
    synonyms: ["enthusiastic", "passionate", "ardent"],
    example_sentence:
      "The zealous volunteers worked tirelessly to support the charity.",
  },
  // Additional vocabulary entries:
  {
    vocabulary: "Amicable",
    meaning: "Friendly and pleasant",
    synonyms: ["friendly", "cordial", "civil"],
    example_sentence:
      "They reached an amicable agreement after hours of negotiation.",
  },
  {
    vocabulary: "Belligerent",
    meaning: "Hostile and aggressive",
    synonyms: ["aggressive", "combative", "pugnacious"],
    example_sentence:
      "His belligerent attitude made it difficult for others to work with him.",
  },
  {
    vocabulary: "Candid",
    meaning: "Truthful and straightforward; frank",
    synonyms: ["honest", "forthright", "open"],
    example_sentence:
      "Her candid remarks during the meeting helped to clarify the situation.",
  },
  {
    vocabulary: "Didactic",
    meaning: "Intended to teach or instruct",
    synonyms: ["educational", "instructive", "informative"],
    example_sentence:
      "The didactic approach of the book made it a useful resource for students.",
  },
  {
    vocabulary: "Eloquent",
    meaning: "Fluent or persuasive in speaking or writing",
    synonyms: ["articulate", "expressive", "persuasive"],
    example_sentence: "Her eloquent speech moved the audience to tears.",
  },
  {
    vocabulary: "Fastidious",
    meaning: "Very attentive to detail; meticulous",
    synonyms: ["meticulous", "careful", "picky"],
    example_sentence: "His fastidious nature made him an excellent editor.",
  },
  {
    vocabulary: "Hapless",
    meaning: "Unfortunate or unlucky",
    synonyms: ["unfortunate", "unlucky", "ill-fated"],
    example_sentence:
      "The hapless traveler lost his luggage and missed his flight.",
  },
  {
    vocabulary: "Impetuous",
    meaning: "Acting or done quickly and without thought",
    synonyms: ["rash", "impulsive", "hasty"],
    example_sentence:
      "His impetuous decision to quit his job led to many unexpected problems.",
  },
  {
    vocabulary: "Jubilant",
    meaning: "Feeling or expressing great happiness and triumph",
    synonyms: ["joyful", "elated", "exultant"],
    example_sentence:
      "The jubilant crowd celebrated the team's victory late into the night.",
  },
  {
    vocabulary: "Keen",
    meaning: "Having or showing eagerness or enthusiasm",
    synonyms: ["eager", "enthusiastic", "ardent"],
    example_sentence:
      "She was keen to start her new job and meet her colleagues.",
  },
  {
    vocabulary: "Lament",
    meaning: "To express sorrow, regret, or unhappiness",
    synonyms: ["mourn", "grieve", "bewail"],
    example_sentence:
      "They lamented the loss of their favorite bookstore, which had closed down.",
  },
  {
    vocabulary: "Mundane",
    meaning: "Lacking interest or excitement; dull",
    synonyms: ["boring", "ordinary", "unremarkable"],
    example_sentence:
      "She was tired of her mundane daily routine and longed for adventure.",
  },
  {
    vocabulary: "Nostalgic",
    meaning: "Longing for the past, often with a sentimental feeling",
    synonyms: ["sentimental", "wistful", "reminiscent"],
    example_sentence:
      "He felt nostalgic when he revisited his old neighborhood.",
  },
  {
    vocabulary: "Ominous",
    meaning:
      "Giving the impression that something bad or unpleasant is going to happen",
    synonyms: ["threatening", "foreboding", "sinister"],
    example_sentence:
      "The dark clouds looked ominous and suggested a storm was approaching.",
  },
  {
    vocabulary: "Pertinent",
    meaning: "Relevant or applicable to a particular matter",
    synonyms: ["relevant", "applicable", "appropriate"],
    example_sentence:
      "The lawyer's questions were pertinent to the case at hand.",
  },
  {
    vocabulary: "Quaint",
    meaning: "Attractively unusual or old-fashioned",
    synonyms: ["charming", "picturesque", "old-fashioned"],
    example_sentence:
      "The quaint village was filled with charming houses and cobblestone streets.",
  },
  {
    vocabulary: "Rancor",
    meaning: "Bitterness or resentfulness, especially when long-standing",
    synonyms: ["resentment", "bitterness", "hostility"],
    example_sentence:
      "He held no rancor towards his former colleagues after leaving the company.",
  },
  {
    vocabulary: "Serene",
    meaning: "Calm, peaceful, and untroubled",
    synonyms: ["calm", "peaceful", "tranquil"],
    example_sentence:
      "The lake was serene and undisturbed, reflecting the beauty of the surrounding mountains.",
  },
  {
    vocabulary: "Tenacious",
    meaning: "Holding fast; characterized by keeping a firm hold",
    synonyms: ["persistent", "determined", "resolute"],
    example_sentence:
      "Her tenacious spirit helped her overcome many challenges.",
  },
  {
    vocabulary: "Unfathomable",
    meaning: "Incapable of being fully explored or understood",
    synonyms: ["incomprehensible", "mysterious", "inscrutable"],
    example_sentence:
      "The depths of the ocean remain largely unfathomable to scientists.",
  },
  {
    vocabulary: "Vivid",
    meaning: "Producing powerful feelings or strong, clear images in the mind",
    synonyms: ["bright", "intense", "vibrant"],
    example_sentence:
      "The artist's use of color made the painting incredibly vivid and striking.",
  },
  {
    vocabulary: "Wistful",
    meaning: "Longing or yearning, often with a hint of sadness",
    synonyms: ["yearning", "sentimental", "pensive"],
    example_sentence:
      "She gazed at the old photographs with a wistful expression.",
  },
  {
    vocabulary: "Yoke",
    meaning: "A means of connecting or joining together",
    synonyms: ["harness", "coupling", "bind"],
    example_sentence:
      "The yoke of the oxen helped them pull the heavy plow through the field.",
  },
  {
    vocabulary: "Zephyr",
    meaning: "A gentle, mild breeze",
    synonyms: ["breeze", "draft", "wind"],
    example_sentence:
      "A zephyr blew through the open window, bringing a sense of freshness to the room.",
  },
  {
    vocabulary: "Ebullient",
    meaning: "Cheerful and full of energy",
    synonyms: ["enthusiastic", "excited", "lively"],
    example_sentence:
      "Her ebullient personality made her the life of the party.",
  },
  {
    vocabulary: "Meticulous",
    meaning: "Showing great attention to detail",
    synonyms: ["careful", "precise", "thorough"],
    example_sentence:
      "He was meticulous in his research, leaving no detail overlooked.",
  },
  {
    vocabulary: "Aplomb",
    meaning: "Self-confidence or assurance",
    synonyms: ["composure", "poise", "self-assurance"],
    example_sentence: "She handled the difficult situation with aplomb.",
  },
  {
    vocabulary: "Conundrum",
    meaning: "A confusing and difficult problem or question",
    synonyms: ["puzzle", "riddle", "mystery"],
    example_sentence: "The detective faced a conundrum in solving the case.",
  },
  {
    vocabulary: "Ubiquitous",
    meaning: "Present, appearing, or found everywhere",
    synonyms: ["everywhere", "omnipresent", "universal"],
    example_sentence: "Smartphones are ubiquitous in modern society.",
  },
  {
    vocabulary: "Sycophant",
    meaning:
      "A person who acts obsequiously toward someone important in order to gain advantage",
    synonyms: ["flatterer", "yes-man", "toady"],
    example_sentence: "The sycophant was always eager to praise his boss.",
  },
  {
    vocabulary: "Belligerent",
    meaning: "Hostile and aggressive",
    synonyms: ["combative", "pugnacious", "antagonistic"],
    example_sentence:
      "His belligerent attitude made it hard to have a peaceful discussion.",
  },
  {
    vocabulary: "Eccentric",
    meaning: "Unconventional and slightly strange",
    synonyms: ["unconventional", "quirky", "peculiar"],
    example_sentence:
      "Her eccentric habits made her stand out in the neighborhood.",
  },
  {
    vocabulary: "Rejuvenate",
    meaning:
      "Make (someone or something) look or feel younger, fresher, or more lively",
    synonyms: ["refresh", "revive", "renew"],
    example_sentence: "A weekend getaway helped to rejuvenate her spirits.",
  },
  {
    vocabulary: "Pernicious",
    meaning: "Having a harmful effect, especially in a gradual or subtle way",
    synonyms: ["harmful", "dangerous", "noxious"],
    example_sentence:
      "The pernicious effects of pollution are not always immediately visible.",
  },
  {
    vocabulary: "Altruistic",
    meaning: "Showing a selfless concern for the well-being of others",
    synonyms: ["selfless", "charitable", "generous"],
    example_sentence:
      "Her altruistic nature drove her to volunteer at the local shelter.",
  },
  {
    vocabulary: "Diligent",
    meaning:
      "Having or showing care and conscientiousness in one's work or duties",
    synonyms: ["hardworking", "industrious", "persistent"],
    example_sentence:
      "She is a diligent student, always completing her assignments on time.",
  },
  {
    vocabulary: "Vex",
    meaning: "Make (someone) feel annoyed, frustrated, or worried",
    synonyms: ["annoy", "irritate", "disturb"],
    example_sentence:
      "The constant noise from the construction site began to vex the residents.",
  },
  {
    vocabulary: "Quintessential",
    meaning:
      "Representing the most perfect or typical example of a quality or class",
    synonyms: ["ideal", "typical", "perfect"],
    example_sentence:
      "She is the quintessential professional, always punctual and prepared.",
  },
  {
    vocabulary: "Furtive",
    meaning:
      "Attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble",
    synonyms: ["secretive", "sly", "sneaky"],
    example_sentence:
      "He cast a furtive glance at the clock, worried about being late.",
  },
  {
    vocabulary: "Indignant",
    meaning:
      "Feeling or showing anger or annoyance at what is perceived as unfair treatment",
    synonyms: ["outraged", "resentful", "annoyed"],
    example_sentence:
      "She was indignant when she found out about the unfair decision.",
  },
  {
    vocabulary: "Obsolete",
    meaning: "No longer produced or used; out of date",
    synonyms: ["outdated", "archaic", "defunct"],
    example_sentence:
      "Many technologies from the 20th century are now considered obsolete.",
  },
  {
    vocabulary: "Pristine",
    meaning: "In its original condition; unspoiled",
    synonyms: ["untouched", "clean", "pure"],
    example_sentence:
      "The beach was pristine, with not a single piece of litter in sight.",
  },
  {
    vocabulary: "Taciturn",
    meaning: "Reserved or uncommunicative in speech; saying little",
    synonyms: ["silent", "quiet", "uncommunicative"],
    example_sentence:
      "He was taciturn during meetings, only speaking when absolutely necessary.",
  },
  {
    vocabulary: "Plausible",
    meaning: "Seeming reasonable or probable",
    synonyms: ["believable", "credible", "reasonable"],
    example_sentence:
      "Her explanation for being late was plausible, so I accepted it.",
  },
  {
    vocabulary: "Serene",
    meaning: "Calm, peaceful, and untroubled",
    synonyms: ["calm", "tranquil", "peaceful"],
    example_sentence:
      "The serene landscape was a perfect setting for relaxation.",
  },
  {
    vocabulary: "Innovative",
    meaning: "Featuring new methods; advanced and original",
    synonyms: ["creative", "inventive", "original"],
    example_sentence:
      "The company's innovative approach led to significant breakthroughs in technology.",
  },
  {
    vocabulary: "Candid",
    meaning: "Truthful and straightforward; frank",
    synonyms: ["honest", "open", "sincere"],
    example_sentence:
      "Her candid feedback was much appreciated, even though it was hard to hear.",
  },
  {
    vocabulary: "Voracious",
    meaning:
      "Wanting or devouring great quantities of food; having a very eager approach to a particular activity",
    synonyms: ["greedy", "ravenous", "insatiable"],
    example_sentence:
      "He had a voracious appetite and could eat an entire pizza by himself.",
  },
  {
    vocabulary: "Ominous",
    meaning:
      "Giving the impression that something bad or unpleasant is going to happen; threatening",
    synonyms: ["threatening", "foreboding", "menacing"],
    example_sentence:
      "The dark clouds were ominous, suggesting that a storm was approaching.",
  },
  {
    vocabulary: "Inept",
    meaning: "Having or showing no skill; clumsy",
    synonyms: ["incompetent", "clumsy", "awkward"],
    example_sentence:
      "His inept handling of the situation only made things worse.",
  },
  {
    vocabulary: "Uplifting",
    meaning: "Morally or spiritually elevating; inspiring happiness or hope",
    synonyms: ["inspiring", "encouraging", "heartening"],
    example_sentence:
      "The speech was uplifting and gave everyone a renewed sense of purpose.",
  },
  {
    vocabulary: "Ephemeral",
    meaning: "Lasting for a very short time",
    synonyms: ["short-lived", "transient", "fleeting"],
    example_sentence:
      "The beauty of the sunset was ephemeral, disappearing as quickly as it arrived.",
  },
  {
    vocabulary: "Exemplary",
    meaning: "Serving as a desirable model; representing the best of its kind",
    synonyms: ["model", "ideal", "outstanding"],
    example_sentence:
      "Her exemplary performance set a new standard for the team.",
  },
  {
    vocabulary: "Nostalgic",
    meaning:
      "Longing for the past, typically for a period or place with happy personal associations",
    synonyms: ["sentimental", "reminiscent", "wistful"],
    example_sentence:
      "He felt nostalgic as he looked through old photographs from his childhood.",
  },
  {
    vocabulary: "Soporific",
    meaning: "Tending to induce drowsiness or sleep",
    synonyms: ["sleep-inducing", "drowsy", "boring"],
    example_sentence:
      "The lecture was so soporific that many students struggled to stay awake.",
  },
  {
    vocabulary: "Frugal",
    meaning: "Sparing or economical with regard to money or food",
    synonyms: ["thrifty", "economical", "sparing"],
    example_sentence:
      "He lived a frugal lifestyle, saving as much money as possible.",
  },
  {
    vocabulary: "Robust",
    meaning: "Strong and healthy; vigorous",
    synonyms: ["strong", "sturdy", "vigorous"],
    example_sentence:
      "The robust structure of the building ensured its safety during the earthquake.",
  },
  {
    vocabulary: "Vehement",
    meaning: "Showing strong feeling; forceful, passionate, or intense",
    synonyms: ["passionate", "fervent", "intense"],
    example_sentence:
      "She gave a vehement defense of her position during the debate.",
  },
  {
    vocabulary: "Nonchalant",
    meaning:
      "Feeling or appearing casually calm and relaxed; not displaying anxiety, interest, or enthusiasm",
    synonyms: ["casual", "indifferent", "unconcerned"],
    example_sentence:
      "His nonchalant attitude towards the stressful situation was surprising.",
  },
  {
    vocabulary: "Belligerent",
    meaning: "Hostile and aggressive",
    synonyms: ["combative", "pugnacious", "antagonistic"],
    example_sentence:
      "His belligerent behavior was unwelcome in the otherwise calm meeting.",
  },
  {
    vocabulary: "Perplex",
    meaning: "Cause (someone) to feel completely baffled",
    synonyms: ["confuse", "baffle", "bewilder"],
    example_sentence:
      "The complex instructions only served to perplex the new employees.",
  },
  {
    vocabulary: "Resilient",
    meaning: "Able to withstand or recover quickly from difficult conditions",
    synonyms: ["flexible", "adaptable", "tough"],
    example_sentence:
      "Her resilient nature helped her bounce back from setbacks quickly.",
  },
  {
    vocabulary: "Discrepancy",
    meaning: "A lack of compatibility or similarity between two or more facts",
    synonyms: ["inconsistency", "difference", "divergence"],
    example_sentence:
      "The discrepancy between the two reports raised concerns about accuracy.",
  },
  {
    vocabulary: "Subtle",
    meaning: "So delicate or precise as to be difficult to analyze or describe",
    synonyms: ["delicate", "nuanced", "faint"],
    example_sentence:
      "There was a subtle difference in the flavor of the two dishes.",
  },
  {
    vocabulary: "Conspicuous",
    meaning: "Standing out so as to be clearly visible",
    synonyms: ["obvious", "noticeable", "prominent"],
    example_sentence:
      "The bright red dress was conspicuous among the sea of black outfits.",
  },
  {
    vocabulary: "Metamorphosis",
    meaning: "A transformation or dramatic change",
    synonyms: ["transformation", "change", "evolution"],
    example_sentence:
      "The caterpillar's metamorphosis into a butterfly is a fascinating process.",
  },
  {
    vocabulary: "Pragmatic",
    meaning:
      "Dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations",
    synonyms: ["practical", "realistic", "down-to-earth"],
    example_sentence:
      "Her pragmatic approach to problem-solving was highly effective.",
  },
  {
    vocabulary: "Recalcitrant",
    meaning:
      "Having an obstinately uncooperative attitude toward authority or discipline",
    synonyms: ["uncooperative", "resistant", "obstinate"],
    example_sentence:
      "The recalcitrant student refused to follow the teacher's instructions.",
  },
  {
    vocabulary: "Disparate",
    meaning: "Essentially different in kind; not allowing comparison",
    synonyms: ["different", "divergent", "unrelated"],
    example_sentence:
      "The two projects were so disparate that it was hard to find any common ground.",
  },
  {
    vocabulary: "Metaphor",
    meaning:
      "A figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable",
    synonyms: ["analogy", "symbol", "figure of speech"],
    example_sentence:
      "In his poem, the sea is a metaphor for the vastness of human emotions.",
  },
  {
    vocabulary: "Camaraderie",
    meaning:
      "Mutual trust and friendship among people who spend a lot of time together",
    synonyms: ["friendship", "companionship", "solidarity"],
    example_sentence:
      "The camaraderie among the team members was evident in their collaborative work.",
  },
  {
    vocabulary: "Redundant",
    meaning: "Not or no longer needed or useful; superfluous",
    synonyms: ["superfluous", "excessive", "unnecessary"],
    example_sentence:
      "The report contained several redundant sections that could be removed.",
  },
  {
    vocabulary: "Innocuous",
    meaning: "Not harmful or offensive",
    synonyms: ["harmless", "safe", "inoffensive"],
    example_sentence:
      "The joke was intended to be innocuous, but it was taken the wrong way.",
  },
  {
    vocabulary: "Inherent",
    meaning:
      "Existing in something as a permanent, essential, or characteristic attribute",
    synonyms: ["intrinsic", "innate", "essential"],
    example_sentence:
      "The inherent risks of the job were clearly outlined in the safety briefing.",
  },
  {
    vocabulary: "Articulate",
    meaning: "Having or showing the ability to speak fluently and coherently",
    synonyms: ["eloquent", "clear", "expressive"],
    example_sentence:
      "She is an articulate speaker who conveys her ideas effectively.",
  },
  {
    vocabulary: "Apathy",
    meaning: "Lack of interest, enthusiasm, or concern",
    synonyms: ["indifference", "unconcern", "detachment"],
    example_sentence:
      "His apathy towards the project was evident in his lack of participation.",
  },
  {
    vocabulary: "Vindicate",
    meaning: "Clear (someone) of blame or suspicion",
    synonyms: ["justify", "absolve", "defend"],
    example_sentence:
      "The new evidence helped to vindicate her from the false accusations.",
  },
  {
    vocabulary: "Ambiguous",
    meaning:
      "Open to more than one interpretation; not having one obvious meaning",
    synonyms: ["unclear", "vague", "confusing"],
    example_sentence:
      "The instructions were ambiguous and led to confusion among the staff.",
  },
  {
    vocabulary: "Debilitate",
    meaning: "Make (someone) very weak and infirm",
    synonyms: ["weaken", "cripple", "enfeeble"],
    example_sentence:
      "The illness debilitated him, making it difficult for him to perform daily tasks.",
  },
  {
    vocabulary: "Eloquent",
    meaning: "Fluent or persuasive in speaking or writing",
    synonyms: ["articulate", "expressive", "persuasive"],
    example_sentence: "Her eloquent speech moved the audience to tears.",
  },
  {
    vocabulary: "Rescind",
    meaning: "Revoke, cancel, or repeal (a law, order, or agreement)",
    synonyms: ["revoke", "cancel", "annul"],
    example_sentence:
      "The company decided to rescind the previous offer after reviewing the contract.",
  },
  {
    vocabulary: "Prolific",
    meaning: "Producing many works, results, or offspring",
    synonyms: ["productive", "abundant", "fruitful"],
    example_sentence:
      "She was a prolific writer, publishing numerous books over her career.",
  },
  {
    vocabulary: "Cordial",
    meaning: "Warm and friendly",
    synonyms: ["friendly", "warm", "sociable"],
    example_sentence:
      "The meeting ended on a cordial note, with everyone expressing their appreciation.",
  },
  {
    vocabulary: "Tentative",
    meaning: "Not certain or fixed; provisional",
    synonyms: ["uncertain", "provisional", "hesitant"],
    example_sentence:
      "The schedule was tentative and subject to change based on feedback.",
  },
  {
    vocabulary: "Vigilant",
    meaning: "Keeping careful watch for possible danger or difficulties",
    synonyms: ["alert", "watchful", "observant"],
    example_sentence:
      "The security guard remained vigilant throughout the night shift.",
  },
  {
    vocabulary: "Skeptical",
    meaning: "Not easily convinced; having doubts or reservations",
    synonyms: ["doubtful", "cynical", "unconvinced"],
    example_sentence:
      "She was skeptical of the new policy and questioned its effectiveness.",
  },
  {
    vocabulary: "Futile",
    meaning: "Incapable of producing any useful result; pointless",
    synonyms: ["pointless", "ineffective", "useless"],
    example_sentence:
      "All efforts to resolve the issue seemed futile in the face of the company's rigid policies.",
  },
  {
    vocabulary: "Ephemeral",
    meaning: "Lasting for a very short time",
    synonyms: ["short-lived", "transient", "fleeting"],
    example_sentence:
      "The beauty of the sunset was ephemeral, disappearing as quickly as it arrived.",
  },
  {
    vocabulary: "Aloof",
    meaning: "Not friendly or forthcoming; cool and distant",
    synonyms: ["distant", "detached", "indifferent"],
    example_sentence:
      "Her aloof demeanor made it difficult for others to get close to her.",
  },
  {
    vocabulary: "Perceptive",
    meaning: "Having or showing sensitive insight",
    synonyms: ["insightful", "discerning", "observant"],
    example_sentence:
      "Her perceptive comments on the novel revealed a deep understanding of its themes.",
  },
  {
    vocabulary: "Voracious",
    meaning:
      "Wanting or devouring great quantities of food; having a very eager approach to a particular activity",
    synonyms: ["greedy", "ravenous", "insatiable"],
    example_sentence:
      "His voracious appetite for knowledge led him to read countless books.",
  },
  {
    vocabulary: "Substantiate",
    meaning: "Provide evidence to support or prove the truth of",
    synonyms: ["support", "prove", "validate"],
    example_sentence:
      "She needed to substantiate her claims with concrete evidence.",
  },
  {
    vocabulary: "Coherent",
    meaning: "Logical and consistent",
    synonyms: ["logical", "consistent", "rational"],
    example_sentence:
      "The presentation was clear and coherent, making it easy to follow.",
  },
  {
    vocabulary: "Alleviate",
    meaning: "Make (suffering, deficiency, or a problem) less severe",
    synonyms: ["ease", "reduce", "relieve"],
    example_sentence: "The medication helped to alleviate her symptoms.",
  },
  {
    vocabulary: "Amiable",
    meaning: "Having or displaying a friendly and pleasant manner",
    synonyms: ["friendly", "sociable", "pleasant"],
    example_sentence:
      "His amiable personality made him a favorite among his colleagues.",
  },
  {
    vocabulary: "Ambivalent",
    meaning:
      "Having mixed feelings or contradictory ideas about something or someone",
    synonyms: ["conflicted", "uncertain", "torn"],
    example_sentence:
      "She felt ambivalent about accepting the job offer, unsure of whether it was the right move.",
  },
  {
    vocabulary: "Sublime",
    meaning:
      "Of such excellence, grandeur, or beauty as to inspire great admiration or awe",
    synonyms: ["majestic", "exalted", "beautiful"],
    example_sentence: "The view from the mountaintop was absolutely sublime.",
  },
  {
    vocabulary: "Elusive",
    meaning: "Difficult to find, catch, or achieve",
    synonyms: ["evasive", "slippery", "hard to grasp"],
    example_sentence:
      "The answer to the problem remained elusive despite their best efforts.",
  },
  {
    vocabulary: "Benevolent",
    meaning: "Well-meaning and kindly",
    synonyms: ["kind", "charitable", "generous"],
    example_sentence:
      "Her benevolent actions earned her the respect and admiration of the community.",
  },
  {
    vocabulary: "Modest",
    meaning:
      "Unassuming or moderate in the estimation of one's abilities or achievements",
    synonyms: ["humble", "unpretentious", "unassuming"],
    example_sentence:
      "Despite his success, he remained modest about his achievements.",
  },
  {
    vocabulary: "Nefarious",
    meaning: "Wicked or criminal",
    synonyms: ["evil", "villainous", "sinister"],
    example_sentence:
      "The villain's nefarious plans were uncovered by the hero.",
  },
  {
    vocabulary: "Deft",
    meaning: "Neatly skillful and quick in one's movements",
    synonyms: ["skillful", "adroit", "nimble"],
    example_sentence:
      "Her deft handling of the difficult situation impressed everyone.",
  },
  {
    vocabulary: "Fortuitous",
    meaning: "Happening by accident or chance rather than design",
    synonyms: ["chance", "accidental", "unplanned"],
    example_sentence:
      "Their meeting was a fortuitous coincidence that led to a great partnership.",
  },
  {
    vocabulary: "Amicable",
    meaning: "Characterized by friendly goodwill",
    synonyms: ["friendly", "cordial", "pleasant"],
    example_sentence:
      "They reached an amicable agreement after a long discussion.",
  },
  {
    vocabulary: "Vehement",
    meaning: "Showing strong feeling; forceful, passionate, or intense",
    synonyms: ["passionate", "fervent", "intense"],
    example_sentence: "He gave a vehement speech in support of the cause.",
  },
  {
    vocabulary: "Opaque",
    meaning: "Not able to be seen through; not transparent",
    synonyms: ["cloudy", "murky", "nontransparent"],
    example_sentence:
      "The glass was so opaque that it was impossible to see through.",
  },
  {
    vocabulary: "Timid",
    meaning: "Showing a lack of courage or confidence; easily frightened",
    synonyms: ["shy", "fearful", "reticent"],
    example_sentence:
      "Her timid response revealed her nervousness about speaking in public.",
  },
  {
    vocabulary: "Gratuitous",
    meaning: "Uncalled for; lacking good reason; unwarranted",
    synonyms: ["unnecessary", "unjustified", "excessive"],
    example_sentence: "The film was criticized for its gratuitous violence.",
  },
  {
    vocabulary: "Turbulent",
    meaning:
      "Characterized by conflict, disorder, or confusion; not controlled or calm",
    synonyms: ["chaotic", "unsettled", "stormy"],
    example_sentence:
      "The turbulent waters made the boat ride quite dangerous.",
  },
  {
    vocabulary: "Voracious",
    meaning:
      "Wanting or devouring great quantities of food; having a very eager approach to a particular activity",
    synonyms: ["greedy", "ravenous", "insatiable"],
    example_sentence:
      "She had a voracious appetite for learning new languages.",
  },
  {
    vocabulary: "Lethargic",
    meaning: "Affected by lethargy; sluggish and apathetic",
    synonyms: ["sluggish", "inactive", "tired"],
    example_sentence: "He felt lethargic after a long day at work.",
  },
  {
    vocabulary: "Resilient",
    meaning: "Able to withstand or recover quickly from difficult conditions",
    synonyms: ["tough", "adaptable", "flexible"],
    example_sentence:
      "The resilient material was perfect for the outdoor furniture.",
  },
  {
    vocabulary: "Eclectic",
    meaning:
      "Deriving ideas, style, or taste from a broad and diverse range of sources",
    synonyms: ["diverse", "varied", "assorted"],
    example_sentence:
      "Her eclectic taste in music ranged from classical to punk rock.",
  },
  {
    vocabulary: "Vivid",
    meaning: "Producing powerful feelings or strong, clear images in the mind",
    synonyms: ["bright", "intense", "clear"],
    example_sentence:
      "The artist's vivid paintings were full of color and emotion.",
  },
  {
    vocabulary: "Sagacious",
    meaning: "Having or showing keen mental discernment and good judgment",
    synonyms: ["wise", "insightful", "judicious"],
    example_sentence:
      "The sagacious leader was known for making wise decisions.",
  },
  {
    vocabulary: "Eloquent",
    meaning: "Fluent or persuasive in speaking or writing",
    synonyms: ["articulate", "expressive", "persuasive"],
    example_sentence: "The president's eloquent speech inspired the nation.",
  },
  {
    vocabulary: "Deferential",
    meaning: "Showing deference; respectful",
    synonyms: ["respectful", "polite", "humble"],
    example_sentence:
      "His deferential attitude towards his elders was appreciated.",
  },
  {
    vocabulary: "Insipid",
    meaning: "Lacking flavor or interest; bland",
    synonyms: ["bland", "dull", "uninteresting"],
    example_sentence: "The soup was insipid and needed more seasoning.",
  },
  {
    vocabulary: "Obstinate",
    meaning:
      "Stubbornly refusing to change one's opinion or chosen course of action, despite attempts to persuade one to do so",
    synonyms: ["stubborn", "unyielding", "inflexible"],
    example_sentence:
      "Despite the evidence, he remained obstinate in his beliefs.",
  },
];

// Function to generate a random result
function generateRandomResult() {
  const randomIndex = Math.floor(Math.random() * results.length);
  return results[randomIndex];
}

// Event listener for button click
document.getElementById("generateButton").addEventListener("click", () => {
  const randomResult = generateRandomResult();
  document.getElementById("vocabulary").textContent = randomResult.vocabulary;
  document.getElementById("meaning").textContent = randomResult.meaning;
  document.getElementById("synonyms").textContent =
    randomResult.synonyms.join(", ");
  document.getElementById("example_sentence").textContent =
    randomResult.example_sentence;
});
