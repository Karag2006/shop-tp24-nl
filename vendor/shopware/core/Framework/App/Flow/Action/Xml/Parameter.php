<?php declare(strict_types=1);

namespace Shopware\Core\Framework\App\Flow\Action\Xml;

use Shopware\Core\Framework\App\Manifest\Xml\XmlElement;
use Shopware\Core\Framework\Log\Package;
use Symfony\Component\Config\Util\XmlUtils;

/**
 * @internal
 */
#[Package('core')]
class Parameter extends XmlElement
{
    protected string $type;

    protected string $name;

    protected string $value;

    protected string $id;

    /**
     * @param array<int|string, mixed> $data
     */
    public function __construct(array $data)
    {
        foreach ($data as $property => $value) {
            $this->$property = $value;
        }
    }

    public function getType(): string
    {
        return $this->type;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getValue(): string
    {
        return $this->value;
    }

    public static function fromXml(\DOMElement $element): self
    {
        return new self(self::parse($element));
    }

    /**
     * @return array<int|string, mixed>
     */
    private static function parse(\DOMElement $element): array
    {
        $values = [];

        /** @var \DOMNamedNodeMap $attributes */
        $attributes = $element->attributes;

        foreach ($attributes as $item) {
            \assert($item instanceof \DOMAttr);
            $values[$item->name] = XmlUtils::phpize($item->value);
        }

        return $values;
    }
}
