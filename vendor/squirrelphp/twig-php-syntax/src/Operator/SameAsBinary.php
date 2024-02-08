<?php

namespace Squirrel\TwigPhpSyntax\Operator;

use Twig\Compiler;
use Twig\Node\Expression\Binary\AbstractBinary;

class SameAsBinary extends AbstractBinary
{
    public function operator(Compiler $compiler): Compiler
    {
        return $compiler->raw('===');
    }
}
