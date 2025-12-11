import { Card, CardBody, CardHeader } from '@heroui/card';
import { Chip } from '@heroui/chip';
import { TextCopyBox } from '../primitive/components/TextCopyBox';

type Props = {
  fullNodePath: string;
};

export const NodePathCard = ({ fullNodePath }: Props) => {
  return (
    <Card fullWidth shadow="sm">
      <CardHeader>
        <Chip variant="faded" color="default" size="md">
          Node Path
        </Chip>
      </CardHeader>

      <CardBody className="pb-unit-sm px-3 pt-0">
        <TextCopyBox text={fullNodePath} />
      </CardBody>
    </Card>
  );
};
