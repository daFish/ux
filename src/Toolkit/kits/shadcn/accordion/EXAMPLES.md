# Examples

## Default

```twig {"preview":true,"height":"500px"}
<twig:Accordion type="single" collapsible class="max-w-md">
    <twig:Accordion:Item value="item-1">
        <twig:Accordion:Trigger>Is it accessible?</twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Yes. It adheres to the WAI-ARIA design pattern.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="item-2">
        <twig:Accordion:Trigger>Is it styled?</twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Yes. It comes with default styles that match the other components' aesthetic.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="item-3">
        <twig:Accordion:Trigger>Is it animated?</twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Yes. It's animated by default, but you can disable it if you prefer.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

## Multiple items open

```twig {"preview":true,"height":"500px"}
<twig:Accordion type="multiple" class="max-w-md">
    <twig:Accordion:Item value="item-1" open>
        <twig:Accordion:Trigger>Can I open multiple items?</twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Yes. Set the type prop to "multiple" to allow multiple items to be open at once.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="item-2" open>
        <twig:Accordion:Trigger>How does it work?</twig:Accordion:Trigger>
        <twig:Accordion:Content>
            Each item can be toggled independently when type is set to "multiple".
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="item-3">
        <twig:Accordion:Trigger>What about accessibility?</twig:Accordion:Trigger>
        <twig:Accordion:Content>
            The accordion follows WAI-ARIA patterns for keyboard navigation and screen reader support.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```

## With default open item

```twig {"preview":true,"height":"500px"}
<twig:Accordion type="single" collapsible class="max-w-md">
    <twig:Accordion:Item value="item-1" open>
        <twig:Accordion:Trigger>This item is open by default</twig:Accordion:Trigger>
        <twig:Accordion:Content>
            You can set the open prop to true to have an item expanded on initial render.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
    <twig:Accordion:Item value="item-2">
        <twig:Accordion:Trigger>Click to expand</twig:Accordion:Trigger>
        <twig:Accordion:Content>
            This item starts collapsed but can be expanded by clicking the trigger.
        </twig:Accordion:Content>
    </twig:Accordion:Item>
</twig:Accordion>
```
