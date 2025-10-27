#!/usr/bin/env python3
"""
Script to merge HTML sections from source to destination file
"""

from bs4 import BeautifulSoup
import re

# File paths
source_file = '/home/user/trembach-kinetic-law/comprehensive_site/sites/site3/site_single_file_v5_hero_three_lines_dedup_fixed (1).html'
dest_file = '/home/user/trembach-kinetic-law/comprehensive_site/sites/site1/FINAL_logo_20pct_smaller (6).html'
output_file = '/home/user/trembach-kinetic-law/Final merged HTML file.html'

print("Reading source file...")
with open(source_file, 'r', encoding='utf-8') as f:
    source_html = f.read()

print("Reading destination file...")
with open(dest_file, 'r', encoding='utf-8') as f:
    dest_html = f.read()

print("Parsing HTML files...")
source_soup = BeautifulSoup(source_html, 'html.parser')
dest_soup = BeautifulSoup(dest_html, 'html.parser')

# Find where "Ui/Ux" appears in source file (case insensitive)
print("Looking for 'Ui/Ux' text in source file...")
sections_to_copy = []
found_uiux = False

# Get all elements in the body
source_body = source_soup.find('body')
if source_body:
    all_elements = source_body.find_all(recursive=False)

    for i, element in enumerate(all_elements):
        element_text = element.get_text()

        # Check if this element or its children contain "Ui/Ux" (case insensitive)
        if not found_uiux and re.search(r'ui\s*/\s*ux', element_text, re.IGNORECASE):
            print(f"Found 'Ui/Ux' in element {i}: {element.name}")
            found_uiux = True
            # Start copying from the NEXT element (after the hero section)
            continue

        # Copy all sections after we found Ui/Ux
        if found_uiux:
            sections_to_copy.append(element)

print(f"Found {len(sections_to_copy)} sections to copy after Ui/Ux")

# Extract styles and scripts from source
print("Extracting styles and scripts from source...")
source_styles = source_soup.find_all('style')
source_scripts = source_soup.find_all('script')

# Find the last section in destination file
print("Finding last section in destination file...")
dest_body = dest_soup.find('body')
if dest_body:
    dest_sections = dest_body.find_all(recursive=False)
    print(f"Destination file has {len(dest_sections)} top-level elements")

    # Insert sections after the last element in body
    for section in sections_to_copy:
        dest_body.append(section)

    print(f"Appended {len(sections_to_copy)} sections to destination")

# Merge styles - add source styles to head if they don't already exist
print("Merging styles...")
dest_head = dest_soup.find('head')
if dest_head:
    # Get existing style content
    existing_style_content = set()
    for style in dest_soup.find_all('style'):
        existing_style_content.add(style.get_text())

    # Add new styles that don't exist
    styles_added = 0
    for style in source_styles:
        style_content = style.get_text()
        if style_content not in existing_style_content:
            new_style = dest_soup.new_tag('style')
            # Copy all attributes
            for attr, value in style.attrs.items():
                new_style[attr] = value
            new_style.string = style_content
            dest_head.append(new_style)
            styles_added += 1

    print(f"Added {styles_added} new style blocks")

# Merge scripts - add source scripts to body if they don't already exist
print("Merging scripts...")
if dest_body:
    # Get existing script srcs and inline content
    existing_scripts = set()
    for script in dest_soup.find_all('script'):
        if script.get('src'):
            existing_scripts.add(script.get('src'))
        else:
            existing_scripts.add(script.get_text())

    # Add new scripts that don't exist
    scripts_added = 0
    for script in source_scripts:
        script_src = script.get('src')
        script_content = script.get_text()

        # Check if this script already exists
        if (script_src and script_src not in existing_scripts) or \
           (not script_src and script_content and script_content not in existing_scripts):
            new_script = dest_soup.new_tag('script')
            # Copy all attributes
            for attr, value in script.attrs.items():
                new_script[attr] = value
            if script_content:
                new_script.string = script_content
            dest_body.append(new_script)
            scripts_added += 1

    print(f"Added {scripts_added} new script blocks")

# Write the merged HTML
print(f"Writing merged HTML to {output_file}...")
with open(output_file, 'w', encoding='utf-8') as f:
    f.write(str(dest_soup))

print("Done! Merged HTML file created successfully.")
