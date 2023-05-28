function dnaStrand(dna: string) {
    return dna.split("").map(
        (char) => 
        char == "C" ? "G" : char == "G" ? "C" : char == "A" ? "T" : "A"
    ).join("");
  };