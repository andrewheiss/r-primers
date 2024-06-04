create_buttons <- function(next_topic = "#") {
  if (is.null(next_topic)) {
    next_button <- ""
  } else {
    next_button <- glue::glue('<a id="nextTopicButton" class="btn btn-danger disabled" href="{next_topic}" role="button">Next topic</a>')
  }
  button_section <- glue::glue('
<section id="buttons">
<button id="continueButton" class="btn btn-primary float-start me-2">Continue</button>
{next_button}
<button id="resetButton" class="btn btn-outline-warning btn-sm float-end">Start over</button>
</section>')
  
  cat(button_section)
}
