import { Button, Card, ProgressBar, Stack } from "react-bootstrap";
import { currencyFormatter } from "../../utils";
import Alert from "@mui/material/Alert";
import Layout from "@mui/material/Stack";

export default function BudgetCard({
  name,
  amount,
  max,
  gray,
  hideButtons,
  onAddExpenseClick,
  onViewExpensesClick,
}) {
  const classNames = [];
  const alert = [];
  if (amount > max) {
    classNames.push("bg-danger", "bg-opacity-10");
    alert.push(
      <Layout sx={{ width: "100%" }} spacing={2} marginTop={2}>
        <Alert severity="error">Budget Exceeded !</Alert>
      </Layout>
    );
  } else if (amount >= 0.75 * max) {
    // refer to this link for conditional redering with DOM elemet:
    // https://stackoverflow.com/questions/50505486/how-to-use-the-reactjs-to-append-dom-elements-with-loop
    classNames.push("bg-warning", "bg-opacity-10");
    alert.push(
      <Layout sx={{ width: "100%" }} spacing={2} marginTop={2}>
        <Alert severity="warning">Warning, almost exceeding budget !</Alert>
      </Layout>
    );
  } else if (gray) {
    classNames.push("bg-light");
  }

  return (
    <Card className={classNames.join(" ")}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="me-2">{name}</div>
          <div className="d-flex align-items-baseline">
            {currencyFormatter.format(amount)}
            {max && (
              <span className="text-muted fs-6 ms-1">
                / {currencyFormatter.format(max)}
              </span>
            )}
          </div>
        </Card.Title>
        {max && (
          <ProgressBar
            className="rounded-pill"
            variant={getProgressBarVariant(amount, max)}
            min={0}
            max={max}
            now={amount}
          />
        )}
        {!hideButtons && (
          <Stack direction="horizontal" gap="2" className="mt-4">
            <Button
              variant="outline-primary"
              className="ms-auto"
              onClick={onAddExpenseClick}
            >
              Add Expense
            </Button>
            <Button onClick={onViewExpensesClick} variant="outline-secondary">
              View Expenses
            </Button>
          </Stack>
        )}
        {alert}
        {/* <Layout sx={{ width: '100%' }} spacing={2}>
        <Alert severity="warning">Warning, almost exceeding budget!</Alert>
        </Layout> */}
      </Card.Body>
    </Card>
  );
}

function getProgressBarVariant(amount, max) {
  const ratio = amount / max;
  if (ratio < 0.75) return "success";
  if (ratio >= 0.75 && ratio < 1) return "warning";
  return "danger";
}