// questionStore.js

const questions = [
  {
    question: "What is the speed of light?",
    subject: "Physics",
    topic: "Optics",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Explain Newton's first law of motion.",
    subject: "Physics",
    topic: "Mechanics",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Define kinetic energy.",
    subject: "Physics",
    topic: "Energy",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "What is the formula for Ohm's Law?",
    subject: "Physics",
    topic: "Electricity",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Describe the concept of simple harmonic motion.",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "State the law of conservation of energy.",
    subject: "Physics",
    topic: "Energy",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Explain the photoelectric effect.",
    subject: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Define power in the context of physics.",
    subject: "Physics",
    topic: "Energy",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "What is the difference between mass and weight?",
    subject: "Physics",
    topic: "Mechanics",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "State Snell's Law.",
    subject: "Physics",
    topic: "Optics",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Explain the concept of torque.",
    subject: "Physics",
    topic: "Mechanics",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Define specific heat capacity.",
    subject: "Physics",
    topic: "Thermodynamics",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "What is the Doppler effect?",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "State Coulomb's Law.",
    subject: "Physics",
    topic: "Electricity",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Explain the concept of wave-particle duality.",
    subject: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "What is the principle of conservation of momentum?",
    subject: "Physics",
    topic: "Mechanics",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Define amplitude in the context of waves.",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Explain the laws of thermodynamics.",
    subject: "Physics",
    topic: "Thermodynamics",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "What is the concept of electric resistance?",
    subject: "Physics",
    topic: "Electricity",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Define the term frequency in the context of waves.",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Explain the laws of motion according to Newton.",
    subject: "Physics",
    topic: "Mechanics",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Describe the concept of electromagnetic induction.",
    subject: "Physics",
    topic: "Electromagnetism",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "What is the Schrödinger equation?",
    subject: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Explain the concept of thermal expansion.",
    subject: "Physics",
    topic: "Thermodynamics",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Define the concept of work in physics.",
    subject: "Physics",
    topic: "Energy",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Explain the principles of nuclear fusion.",
    subject: "Physics",
    topic: "Nuclear Physics",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "What is the principle of least action?",
    subject: "Physics",
    topic: "Classical Mechanics",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Describe the concept of electric capacitance.",
    subject: "Physics",
    topic: "Electricity",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Explain the phenomenon of interference in waves.",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Define the concept of angular momentum.",
    subject: "Physics",
    topic: "Mechanics",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "What is the concept of wave-particle duality?",
    subject: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Explain the principles of fluid dynamics.",
    subject: "Physics",
    topic: "Fluid Mechanics",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Define electric potential energy.",
    subject: "Physics",
    topic: "Electricity",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Describe the concept of magnetic field lines.",
    subject: "Physics",
    topic: "Electromagnetism",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Explain the principles of wave optics.",
    subject: "Physics",
    topic: "Optics",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Define the concept of entropy in thermodynamics.",
    subject: "Physics",
    topic: "Thermodynamics",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "What is the uncertainty principle?",
    subject: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Explain the concept of resonance in physics.",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Describe the principles of electric circuits.",
    subject: "Physics",
    topic: "Electricity",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Define the concept of wave interference.",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Explain the principles of quantum entanglement.",
    subject: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Describe the principles of general relativity.",
    subject: "Physics",
    topic: "Relativity",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "What is the concept of quantum tunneling?",
    subject: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Explain the principles of statistical mechanics.",
    subject: "Physics",
    topic: "Statistical Mechanics",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Define the concept of quantum field theory.",
    subject: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Describe the principles of string theory.",
    subject: "Physics",
    topic: "String Theory",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "What is the concept of dark matter?",
    subject: "Physics",
    topic: "Astrophysics",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Explain the principles of chaos theory.",
    subject: "Physics",
    topic: "Chaos Theory",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Define the concept of Hawking radiation.",
    subject: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "What is the concept of quantum computing?",
    subject: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Explain the principles of astrophysical jets.",
    subject: "Physics",
    topic: "Astrophysics",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Describe the principles of black hole thermodynamics.",
    subject: "Physics",
    topic: "Black Hole Physics",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Define the concept of dark energy.",
    subject: "Physics",
    topic: "Cosmology",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Explain the principles of superfluidity.",
    subject: "Physics",
    topic: "Condensed Matter Physics",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "What is the concept of quantum teleportation?",
    subject: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Describe the principles of quantum chromodynamics.",
    subject: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Define the concept of Bose-Einstein condensate.",
    subject: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Explain the principles of cosmic inflation.",
    subject: "Physics",
    topic: "Cosmology",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "What is the concept of non-locality in quantum mechanics?",
    subject: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Describe the principles of high-energy particle physics.",
    subject: "Physics",
    topic: "Particle Physics",
    difficulty: "Hard",
    marks: 15,
  },
  // Chemistry
  {
    question: "What is the structure of a water molecule?",
    subject: "Chemistry",
    topic: "Molecular Structure",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Define the concept of pH in chemistry.",
    subject: "Chemistry",
    topic: "Acids and Bases",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "What is the chemical formula for methane?",
    subject: "Chemistry",
    topic: "Organic Chemistry",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Describe the properties of noble gases.",
    subject: "Chemistry",
    topic: "Periodic Table",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Explain the concept of chemical bonding.",
    subject: "Chemistry",
    topic: "Chemical Bonding",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Define the term 'stoichiometry' in chemistry.",
    subject: "Chemistry",
    topic: "Chemical Reactions",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "What is the structure of the atom?",
    subject: "Chemistry",
    topic: "Atomic Structure",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Describe the properties of alkanes.",
    subject: "Chemistry",
    topic: "Organic Chemistry",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Explain the concept of oxidation and reduction.",
    subject: "Chemistry",
    topic: "Redox Reactions",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Define the term 'mole' in chemistry.",
    subject: "Chemistry",
    topic: "Chemical Quantities",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "What is the molecular formula of glucose?",
    subject: "Chemistry",
    topic: "Organic Chemistry",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Describe the properties of halogens.",
    subject: "Chemistry",
    topic: "Periodic Table",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Explain the concept of solubility in chemistry.",
    subject: "Chemistry",
    topic: "Chemical Solutions",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Define the term 'isotope' in chemistry.",
    subject: "Chemistry",
    topic: "Atomic Structure",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "What is the structure of the periodic table?",
    subject: "Chemistry",
    topic: "Periodic Table",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Describe the properties of alkenes.",
    subject: "Chemistry",
    topic: "Organic Chemistry",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Explain the concept of chemical equilibrium.",
    subject: "Chemistry",
    topic: "Chemical Equilibrium",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Define the term 'ion' in chemistry.",
    subject: "Chemistry",
    topic: "Chemical Reactions",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "What is the molecular formula of water?",
    subject: "Chemistry",
    topic: "Molecular Structure",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Describe the properties of alkynes.",
    subject: "Chemistry",
    topic: "Organic Chemistry",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Explain the concept of chemical kinetics.",
    subject: "Chemistry",
    topic: "Chemical Kinetics",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "What is the structure of an amino acid?",
    subject: "Chemistry",
    topic: "Biochemistry",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Describe the properties of transition metals.",
    subject: "Chemistry",
    topic: "Transition Metals",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Define the term 'electronegativity' in chemistry.",
    subject: "Chemistry",
    topic: "Chemical Bonding",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Explain the concept of nuclear reactions.",
    subject: "Chemistry",
    topic: "Nuclear Chemistry",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "What is the molecular structure of sulfuric acid?",
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Describe the properties of carbohydrates.",
    subject: "Chemistry",
    topic: "Biochemistry",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Define the term 'enthalpy' in chemistry.",
    subject: "Chemistry",
    topic: "Thermodynamics",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Explain the concept of coordination compounds.",
    subject: "Chemistry",
    topic: "Coordination Chemistry",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "What is the structure of a nucleotide?",
    subject: "Chemistry",
    topic: "Biochemistry",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Describe the properties of nonmetals.",
    subject: "Chemistry",
    topic: "Periodic Table",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Explain the concept of resonance in chemistry.",
    subject: "Chemistry",
    topic: "Chemical Bonding",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Define the term 'Gibbs free energy' in chemistry.",
    subject: "Chemistry",
    topic: "Thermodynamics",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "What is the structure of an alkyl halide?",
    subject: "Chemistry",
    topic: "Organic Chemistry",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Describe the properties of gases.",
    subject: "Chemistry",
    topic: "Gas Laws",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Explain the concept of acid-base titrations.",
    subject: "Chemistry",
    topic: "Analytical Chemistry",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Define the term 'periodicity' in chemistry.",
    subject: "Chemistry",
    topic: "Periodic Table",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "What is the molecular structure of ethanoic acid?",
    subject: "Chemistry",
    topic: "Organic Chemistry",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Describe the properties of alkaline earth metals.",
    subject: "Chemistry",
    topic: "Periodic Table",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Explain the principles of quantum chemistry.",
    subject: "Chemistry",
    topic: "Quantum Chemistry",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "What is the structure of a polypeptide chain?",
    subject: "Chemistry",
    topic: "Biochemistry",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Describe the properties of lanthanides and actinides.",
    subject: "Chemistry",
    topic: "Transition Metals",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Define the term 'bond polarity' in chemistry.",
    subject: "Chemistry",
    topic: "Chemical Bonding",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Explain the concept of nuclear fission and fusion.",
    subject: "Chemistry",
    topic: "Nuclear Chemistry",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "What is the molecular structure of phosphoric acid?",
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Describe the properties of lipids.",
    subject: "Chemistry",
    topic: "Biochemistry",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Define the term 'thermodynamic stability' in chemistry.",
    subject: "Chemistry",
    topic: "Thermodynamics",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Explain the concept of crystal field theory.",
    subject: "Chemistry",
    topic: "Coordination Chemistry",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "What is the structure of a ribonucleic acid (RNA)?",
    subject: "Chemistry",
    topic: "Biochemistry",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Describe the properties of halides.",
    subject: "Chemistry",
    topic: "Periodic Table",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Explain the concept of molecular orbital theory.",
    subject: "Chemistry",
    topic: "Chemical Bonding",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Define the term 'chemical thermodynamics' in chemistry.",
    subject: "Chemistry",
    topic: "Thermodynamics",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "What is the structure of an organometallic compound?",
    subject: "Chemistry",
    topic: "Organic Chemistry",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Describe the properties of plasmas.",
    subject: "Chemistry",
    topic: "Plasma Chemistry",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Explain the concept of spectroscopy in chemistry.",
    subject: "Chemistry",
    topic: "Analytical Chemistry",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Define the term 'transition state' in chemistry.",
    subject: "Chemistry",
    topic: "Chemical Kinetics",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "What is the molecular structure of butanoic acid?",
    subject: "Chemistry",
    topic: "Organic Chemistry",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Describe the properties of noble gases.",
    subject: "Chemistry",
    topic: "Periodic Table",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Explain the concept of Nernst equation.",
    subject: "Chemistry",
    topic: "Electrochemistry",
    difficulty: "Hard",
    marks: 15,
  },
];

module.exports = {
  getQuestions: () => questions,
};
