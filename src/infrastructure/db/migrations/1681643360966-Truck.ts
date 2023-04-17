import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Truck1681643360966 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'truck',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'brand',
                        type: 'varchar',
                        length: '20',
                        isNullable: false,
                    },
                    {
                        name: 'load',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'capacity',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'year',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'numRepairs',
                        type: 'int',
                        isNullable: false,
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('trucks');
    }
}


