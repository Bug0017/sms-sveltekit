<script lang="ts">
  import { Button, Modal, Form, TextInput, PasswordInput } from "carbon-components-svelte";

  let open = false;
</script>

<Button on:click={() => (open = true)}>Register</Button>

<Modal
  bind:open
  modalHeading="Register"
  primaryButtonText="Register"
  secondaryButtonText="Cancel"
  on:click:button--secondary={() => (open = false)}
  on:open
  on:close
  on:submit
>
    <Form>
        <TextInput labelText="User name" placeholder="Enter user name..." required />
        <TextInput labelText="Email" placeholder="Enter email ..." required />
        <PasswordInput
          required
          type="password"
          labelText="Password"
          placeholder="Enter password..."
        />
    </Form>
</Modal>