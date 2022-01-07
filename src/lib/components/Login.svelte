<script lang="ts">
  import { Button, Modal,Form, TextInput, PasswordInput } from "carbon-components-svelte";

  let open = false;
</script>

<Button on:click={() => (open = true)}>Login</Button>

<Modal
  bind:open
  modalHeading="Login"
  primaryButtonText="Login"
  secondaryButtonText="Cancel"
  on:click:button--secondary={() => (open = false)}
  on:open
  on:close
  on:submit
>
   <Form>
        <TextInput labelText="Email" type="email" placeholder="Enter email ..." required />
        <PasswordInput
          required
          type="password"
          labelText="Password"
          placeholder="Enter password..."
        />
    </Form>
</Modal>