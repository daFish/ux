# CHANGELOG

## Unreleased

- Automatic pagination support added: if the query would return more results
  than your limit, when the user scrolls to the bottom of the options, it will
  make a second Ajax call to load more. (#502) - @norkunas
- Support added for setting the required minimum search query length (defaults to 3) (#492) - @daFish
- Fix loading autocomplete choices with ID value objects (#494) - @norkunas
- Add option for setting max_results (#478) - @DarrHeLL
- Doc: emphasizing that no options should be passed directly to the field (#475) - @weaverryan
- 
