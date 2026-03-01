#!/usr/bin/env python3
"""
jsonify.py - Convert questions and answers arrays to JSON format

This script accepts two arrays:
  - questions: list of strings (question prompts)
  - answers: list of lists of strings (answer options for each question)

Validates that both arrays exist and have matching lengths, then outputs
a JSON file containing the structured data.
"""

import json
import sys
from typing import List


def validate_arrays(questions: List[str], answers: List[List[str]]) -> bool:
    """
    Validates that both arrays exist and have matching lengths.
    
    Args:
        questions: List of question strings
        answers: List of answer lists
        
    Returns:
        bool: True if validation passes
        
    Raises:
        ValueError: If validation fails
    """
    if not questions:
        raise ValueError("Questions array is empty or does not exist")
    if not answers:
        raise ValueError("Answers array is empty or does not exist")
    if len(questions) != len(answers):
        raise ValueError(
            f"Array length mismatch: {len(questions)} questions but {len(answers)} answer groups"
        )
    return True


def create_json(questions: List[str], answers: List[List[str]], output_file: str = "output.json") -> dict:
    """
    Creates a JSON structure from questions and answers arrays.
    
    Args:
        questions: List of question strings
        answers: List of answer lists (one list per question)
        output_file: Path where JSON will be written (default: output.json)
        
    Returns:
        dict: The JSON data that was written
        
    Raises:
        ValueError: If validation fails
    """
    # Validate arrays
    validate_arrays(questions, answers)
    
    # Create the JSON structure
    data = {
        "questions": questions,
        "answers": answers
    }
    
    # Write to file
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"✓ JSON successfully written to '{output_file}'")
        print(f"  - Questions: {len(questions)}")
        print(f"  - Answer groups: {len(answers)}")
    except IOError as e:
        raise IOError(f"Failed to write to '{output_file}': {e}")
    
    return data


def main():
    """
    Main function with example arrays for testing.
    """
    # Example questions
    example_questions = [
        "What is the capital of France?",
        "Which planet is known as the Red Planet?",
        "What is the largest ocean on Earth?"
    ]
    
    # Example answers (multiple choice options)
    example_answers = [
        ["Paris", "London", "Berlin", "Madrid"],
        ["Venus", "Mars", "Jupiter", "Saturn"],
        ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"]
    ]
    
    try:
        # Create and output JSON
        result = create_json(example_questions, example_answers, "output.json")
        print("\nGenerated JSON structure:")
        print(json.dumps(result, indent=2, ensure_ascii=False))
    except (ValueError, IOError) as e:
        print(f"✗ Error: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
