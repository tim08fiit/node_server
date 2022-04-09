function getYears(){
    let firstYear = 2016;
    let currentYear = new Date().getFullYear();
    let numYears = currentYear - firstYear + 1
    const years = new Array(numYears);
    
    for (let i = 0; i < numYears; i++) {
        years[i] = firstYear + i
    }
    return years;
}

export const YEARS = getYears();

export const REGIONS = ['slovakia', 'great britan', 'germany', 'czech republic', 'hungary', 'austria', 'poland', 'croatia', 'italy', 'scotland', 'adverse', 'media', 'screening']

export const KEYWORDS = ['Abusive Sexual Contact', 'Antitrust', 'Arson', 'Assassination', 'Assault', 'Attempted Murder', 'Bank Burglary', 'Bankruptcy Fraud', 'Blackmail', 'Bombing Matters', 'Bomb Threat', 'Bond Default', 'Bribery', 'Burglary', 'Child Abuse', 'Child Abandonment', 'Child Abduction', 'Child Exploitation', 'Child Pornography', 'Civil Rights Violations', 'Computer Crime', 'Conspiracy', 'Conspiracy to Murder', 'Conveying False Information', 'Copyright Matters', 'Counterfeiting', 'Credit Card Fraud', 'Cruelty of Animals', 'Cyber Crimes', 'Cyberbullying', 'Dangerous Driving', 'Death Threat', 'Domestic Violence', 'Drug Distribution', 'Drug Possession', 'Drug Smuggling', 'Drug Trafficking', 'Drunk Driving', 'Embezzlement', 'Escaping Custody', 'Exportation of Drugs', 'Extortion', 'False Bail', 'Falsely Claiming Citizenship', 'False Information and Hoaxes', 'Felony', 'First Degree Murder', 'Forced Labor', 'Forgery', 'Fraud', 'Hacking Crimes', 'Harassment', 'Hate Crime Acts', 'Homicide', 'Hostage Taking', 'Identity Theft', 'Illegal Emigration', 'Illegal Possession of Firearms', 'Importation of Drugs', 'Insurance Fraud', 'Kidnapping', 'Larceny', 'Manslaughter', 'Molestation', 'Money Laundering', 'Murder', 'Narcotics Violations', 'Pirating', 'Probation Violation', 'Prostitution', 'Racketeering', 'Ransom Money', 'Rape', 'Robbery', 'Sabotage', 'Sale of Citizenship Papers', 'Sale of Stolen Vehicles', 'Second Degree Murder', 'Serial Murders', 'Sexual Abuse', 'Sexual Assault', 'Sexual Conduct with a Minor', 'Sex Trafficking', 'Shoplifting', 'Smuggling', 'Stalking', 'Tax Evasion', 'Tax Fraud', 'Terrorism', 'Theft', 'Torture', 'Transportation of Stolen Vehicles', 'Trespassing', 'Treason', 'Vandalism', 'Wire Fraud']
